import axios, { AxiosError, AxiosResponse } from 'axios'
import { serverEntryPoint } from '../shared/constants/serverEntryPoint'
import { ErrorDto } from '../shared/dto/ErrorDto'
import { Entity } from '../shared/types/Entity'

export abstract class AbstractClient {
  public entity: Entity
  public URL: string
  public axios: any

  public constructor(entity: Entity, phone: string, password: string) {
    this.entity = entity
    this.URL = `${serverEntryPoint}${this.entity}`
    this.axios = axios.create({
      timeout: 20000,
      headers: {
        Authorization: `Basic ${Buffer.from('1:password', 'utf8').toString(
          'base64',
        )}`,
      },
    })
  }

  public errorHandler = (error: AxiosError): AxiosResponse<ErrorDto> => {
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
    }
    return {
      data: {
        error: error.message,
      },
    } as AxiosResponse<ErrorDto>
  }
}
