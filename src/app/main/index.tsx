import React, { useEffect } from 'react'
import { GamesList } from '../gamesList'
import './index.css'
import { useDispatch } from 'react-redux'
import { gameControlActions } from '../gameControl/actions'

import { Typography } from 'antd'

const { Title } = Typography

export const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gameControlActions.loadData())
  }, [])

  return (
    <>
      <Title>Главная</Title>
      <GamesList />
    </>
  )
}
