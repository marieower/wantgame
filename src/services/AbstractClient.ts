import axios, { AxiosError, AxiosResponse } from 'axios'
import { Entity } from '../shared/types/Entity'
import { serverEntryPoint } from '../shared/constants/serverEntryPoint'

export abstract class AbstractClient {
  public entity: Entity
  public URL: string
  public axios = axios.create({ timeout: 20000 })

  public constructor(entity: Entity) {
    this.entity = entity
    this.URL = `${serverEntryPoint}${this.entity}`
  }

  public errorHandler = (error: AxiosError): AxiosResponse | AxiosError => {
    // Error 😨
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
      return error.response
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request)

      return {
        data: {
          error: error.message,
        },
      } as AxiosResponse
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message)
    }

    return error
  }
}
