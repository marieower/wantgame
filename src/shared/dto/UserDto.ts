import { RoleDto } from './RoleDto'
import { SportDto } from './SportDto'

export interface UserDto {
	aboutMe: string
	firstName: string
	id: number
	lastName: string
	phone: string
	sports: SportDto[]
	roles: RoleDto[]
}
