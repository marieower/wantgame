import { AxiosError, AxiosResponse } from 'axios'
import { UserDto } from '../shared/dto/UserDto'
import { AbstractClient } from './AbstractClient'
import { NewUserDto } from '../shared/dto/NewUserDto'

export class UserClient extends AbstractClient {
  constructor() {
    super('users')
  }

  public login = async (): Promise<AxiosResponse<any> | AxiosError> => {
    try {
      const response: AxiosResponse<UserDto> = await this.axios.get(
        `${this.URL}/login`,
      )

      console.log(response)

      return response
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  public register = async (
    dto: NewUserDto,
  ): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await this.axios.post(
        `${this.URL}/register`,
        dto,
      )

      console.log(response)

      return response
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  // Todo:
  // public logout = async (): Promise<AxiosResponse<any> | AxiosError> => {
  //   try {
  //   } catch (error) {
  //     return this.errorHandler(error)
  //   }
  // }
}
