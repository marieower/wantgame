import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gameControlActions } from '../gameControl/actions'
import { GamesList } from '../gamesList'
import { Typography } from 'antd'

const { Title } = Typography

export const CreatedByMe = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gameControlActions.loadCreatedByMe())
  }, [])

  return (
    <>
      <Title>Созданные мной</Title>
      <GamesList />
    </>
  )
}
