import { useSelector } from 'react-redux'
import { IRootState } from '../../store/state'

export const useLoggedStatus = () => {
  const { user } = useSelector((state: IRootState) => state.userControl)

  return user !== null
}
