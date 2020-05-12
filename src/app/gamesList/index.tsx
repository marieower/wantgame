import { UserOutlined } from '@ant-design/icons'
import { Button, Card, List, Statistic } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GameDto } from '../../shared/dto/GameDto'
import { useLoggedStatus } from '../../shared/hooks/useLoggedStatus'
import { IRootState } from '../../store/state'
import { gameControlActions } from '../gameControl/actions'

export const GamesList = () => {
  const { games, isFetching } = useSelector(
    (state: IRootState) => state.gameControl,
  )

  const { user } = useSelector((state: IRootState) => state.userControl)
  const isLoggedIn = useLoggedStatus()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gameControlActions.loadData())
  }, [])

  const isJoined = (members: number[]) => {
    return members.includes(user?.id as number)
  }

  const handleOpenGame = (id: number) => {
    dispatch(gameControlActions.openModal(id))
  }

  const handleJoin = (id: number) => {
    dispatch(gameControlActions.join(id))
  }

  const handleLeft = (id: number) => {
    dispatch(gameControlActions.left(id))
  }

  return (
    <List
      className='list'
      grid={{ gutter: 20, column: 3 }}
      dataSource={games as GameDto[]}
      loading={isFetching}
      renderItem={(item: GameDto) => {
        const joined = isJoined(item.membersIds)

        return (
          <List.Item>
            <Card
              className='card'
              hoverable={true}
              onClick={() => handleOpenGame(item.id)}
            >
              <div className='card__header'>
                <h3>{item.name}</h3>
              </div>

              <img
                className='card__image'
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />

              <div className='card__footer'>
                <div className='card__footer__user'>
                  <UserOutlined />
                  <span>{`${item.owner.firstName} ${item.owner.lastName}`}</span>
                </div>
                <div className='card__footer__counter'>
                  <p>Участников</p>
                  <Statistic
                    value={item.currentPlayersCount}
                    suffix={`/ ${item.minimumPlayers}`}
                    className='counter'
                  />
                </div>
              </div>

              <Button
                disabled={!isLoggedIn}
                type='primary'
                color='blue'
                block={true}
                onClick={
                  isLoggedIn
                    ? (e) => {
                        e.stopPropagation()
                        joined ? handleLeft(item.id) : handleJoin(item.id)
                      }
                    : undefined
                }
              >
                {joined ? 'Отменить' : 'Присоединиться'}
              </Button>
            </Card>
          </List.Item>
        )
      }}
    />
  )
}
