import { AxiosError, AxiosResponse } from 'axios'
import { UserDto } from '../shared/dto/UserDto'
import { AbstractClient } from './AbstractClient'
import { NewUserDto } from '../shared/dto/NewUserDto'
import { ErrorDto } from '../shared/dto/ErrorDto'

export class UserClient extends AbstractClient {
  constructor(phone: string = '1', password: string = 'password') {
    super('users', phone, password)
  }

  public login = async (): Promise<
    AxiosResponse<UserDto | ErrorDto> | AxiosError
  > => {
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
        `${this.URL}/registration`,
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
