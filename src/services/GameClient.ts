import { AbstractClient } from './AbstractClient'
import { AxiosResponse, AxiosError } from 'axios'
import { GameDto } from '../shared/dto/GameDto'
import { ErrorDto } from '../shared/dto/ErrorDto'

export class GameClient extends AbstractClient {
  constructor(token?: string) {
    super('games', token)
  }

  public getAll = (): AxiosResponse<GameDto[] | ErrorDto> => {
    return this.axios
      .get(`${this.URL}`)
      .catch((error: AxiosError) => this.errorHandler(error))
  }

  public join = (id: string): AxiosResponse => {
    return this.axios
      .post(`${this.URL}/join/${id}`)
      .catch((error: AxiosError) => this.errorHandler(error))
  }

  public left = (id: string): AxiosResponse => {
    return this.axios
      .post(`${this.URL}/left/${id}`)
      .catch((error: AxiosError) => this.errorHandler(error))
  }
}
