import { SportDto } from './SportDto'
import { UserDto } from './UserDto'

export interface GameDto {
  canInvite: boolean
  cost: number
  currentPlayersCount: number
  description: string
  id: number
  isClosed: boolean
  minimumPlayers: number
  name: string
  owner: UserDto
  place: string
  rating: number
  sportDto: SportDto
  time: string
  membersIds: number[]
}
