import { UserDto } from '../../shared/dto/UserDto'

export interface IUserControlState {
  user: UserDto | null
  isFetching: boolean
  error: string
}
