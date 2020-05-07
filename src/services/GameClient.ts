import { AbstractClient } from './AbstractClient'
import { AxiosResponse } from 'axios'
import { GameDto } from '../shared/dto/GameDto'
import { ErrorDto } from '../shared/dto/ErrorDto'

export class GameClient extends AbstractClient {
  constructor(phone: string = '1', password: string = 'password') {
    super('games', phone, password)
  }

  public getAll = (): AxiosResponse<GameDto[] | ErrorDto> => {
    try {
      return this.axios.get(`${this.URL}`)
    } catch (error) {
      return this.errorHandler(error)
    }
  }
}
