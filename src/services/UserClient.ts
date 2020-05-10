import { AxiosError, AxiosResponse } from 'axios'
import { UserDto } from '../shared/dto/UserDto'
import { AbstractClient } from './AbstractClient'
import { NewUserDto } from '../shared/dto/NewUserDto'
import { ErrorDto } from '../shared/dto/ErrorDto'

export class UserClient extends AbstractClient {
  constructor(token?: string) {
    super('users', token)
  }

  public login = async (): Promise<
    AxiosResponse<UserDto | ErrorDto> | AxiosError
  > => {
    return await this.axios
      .get(`${this.URL}/login`)
      .catch((error: AxiosError) => this.errorHandler(error))
  }

  public register = async (
    dto: NewUserDto,
  ): Promise<AxiosResponse | AxiosError> => {
    return await this.axios
      .post(`${this.URL}/registration`, dto)
      .catch((error: AxiosError) => this.errorHandler(error))
  }

  // Todo:
  // public logout = async (): Promise<AxiosResponse<any> | AxiosError> => {
  //   try {
  //   } catch (error) {
  //     return this.errorHandler(error)
  //   }
  // }
}
