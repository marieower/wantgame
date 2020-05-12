import { UserOutlined } from '@ant-design/icons'
import { Button, Card, List, Statistic } from 'antd'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GameDto } from '../../shared/dto/GameDto'
import { useLoggedStatus } from '../../shared/hooks/useLoggedStatus'
import { IRootState } from '../../store/state'
import { gameControlActions } from '../gameControl/actions'

interface IGamesListProps {
  games: GameDto[]
  loading: boolean
}

export const GamesList = ({ games, loading }: IGamesListProps) => {
  const { user } = useSelector((state: IRootState) => state.userControl)
  const isLoggedIn = useLoggedStatus()

  const dispatch = useDispatch()

  const isJoined = (members: number[]) => {
    return members.includes(user?.id as number)
  }

  const handleJoin = (id: number) => dispatch(gameControlActions.join(id))

  const handleLeft = (id: number) => dispatch(gameControlActions.left(id))

  return (
    <List
      className='list'
      grid={{ gutter: 20, column: 3 }}
      dataSource={games as GameDto[]}
      loading={loading}
      renderItem={(item: GameDto) => {
        const joined = isJoined(item.membersIds)

        return (
          <List.Item>
            <Card className='card' hoverable={true}>
              <div className='card__header'>
                <h3>{item.name}</h3>
              </div>

              <img
                className='card__image'
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />

              <div className='card__body'>
                <span>{item.description}</span>
              </div>

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
                onClick={() =>
                  joined ? handleLeft(item.id) : handleJoin(item.id)
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
