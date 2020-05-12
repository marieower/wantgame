import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { PageWrapper } from '../pageWrapper'
import { gameControlActions } from '../gameControl/actions'
import { GamesList } from '../gamesList'
import './index.css'

export const Main = () => {
  const { games, isFetching } = useSelector(
    (state: IRootState) => state.gameControl,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gameControlActions.loadData())
  }, [dispatch])

  return (
    <PageWrapper>
      <GamesList games={games} loading={isFetching} />
    </PageWrapper>
  )
}
