import { UserOutlined } from '@ant-design/icons'
import { Button, Card, List, Statistic } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { GameDto } from '../../shared/dto/GameDto'
import { useLoggedStatus } from '../../shared/hooks/useLoggedStatus'
import { IRootState } from '../../store/state'

interface IGamesListProps {
  games: GameDto[]
  loading: boolean
  onJoin: Function
  onLeft: Function
}

export const GamesList = ({ games, loading, onJoin }: IGamesListProps) => {
  const { user } = useSelector((state: IRootState) => state.userControl)
  const isLoggedIn = useLoggedStatus()

  const isJoined = (members: number[]) => {
    return members.includes(user?.id as number)
  }

  return (
    <List
      className='list'
      grid={{ gutter: 20, column: 3 }}
      dataSource={games as GameDto[]}
      loading={loading}
      renderItem={(item: GameDto) => (
        <List.Item>
          <Card className='card'>
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
              onClick={() => onJoin(item.id)}
            >
              {isJoined(item.membersIds) ? 'Отменить' : 'Присоединиться'}
            </Button>
          </Card>
        </List.Item>
      )}
    />
  )
}
