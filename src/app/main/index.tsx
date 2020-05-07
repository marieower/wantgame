import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { PageWrapper } from '../pageWrapper'
import { mainActions } from './actions'
import { GamesList } from '../../shared/components/GamesList'
import './index.css'

export const Main = () => {
  const { games, isFetching } = useSelector((state: IRootState) => state.main)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainActions.loadData())
  }, [dispatch])

  return (
    <PageWrapper>
      <GamesList
        onJoin={() => null}
        onLeft={() => null}
        games={games}
        loading={isFetching}
      />
    </PageWrapper>
  )
}
