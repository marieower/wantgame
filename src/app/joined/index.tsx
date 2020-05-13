import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gameControlActions } from '../gameControl/actions'
import { GamesList } from '../gamesList'
import { Typography } from 'antd'

const { Title } = Typography

export const Joined = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gameControlActions.loadJoined())
  }, [])

  return (
    <>
      <Title>Я участвую</Title>
      <GamesList />
    </>
  )
}
