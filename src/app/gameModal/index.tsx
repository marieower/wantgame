import { CalendarOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Modal, Statistic } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { gameControlActions } from '../gameControl/actions'

export const GameModal = () => {
  const { currentGame, isFetching, games } = useSelector(
    (state: IRootState) => state.gameControl,
  )
  const { user } = useSelector((state: IRootState) => state.userControl)

  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(gameControlActions.closeModal())
  }

  const handleJoin = (id: number) => {
    dispatch(gameControlActions.join(id))
  }

  const handleLeft = (id: number) => {
    dispatch(gameControlActions.left(id))
  }

  if (currentGame !== null) {
    const game = games.filter((item) => currentGame === item.id)[0]

    const joined = game.membersIds.includes(user!.id)
    return (
      <Modal
        className='card'
        title={game.name}
        visible={Boolean(currentGame)}
        onCancel={handleCancel}
        footer={null}
      >
        <img
          width='100%'
          className='card__image'
          alt='example'
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />

        <div className='card__body'>
          <span>{game.description}</span>
          <div>
            <HomeOutlined />
            <span>{game.place}</span>

            <CalendarOutlined />
            <span>{new Date(game.time).toLocaleString()}</span>
          </div>
        </div>

        <div className='card__footer'>
          <div className='card__footer__user'>
            <UserOutlined />
            <span>{`${game.owner.firstName} ${game.owner.lastName}`}</span>
          </div>
          <div className='card__footer__counter'>
            <p>Участников</p>
            <Statistic
              value={game.currentPlayersCount}
              suffix={`/ ${game.minimumPlayers}`}
              className='counter'
            />
          </div>
        </div>

        <Button
          loading={isFetching}
          type='primary'
          color='blue'
          block={true}
          onClick={
            joined
              ? () => {
                  joined ? handleLeft(game.id) : handleJoin(game.id)
                }
              : undefined
          }
        >
          {joined ? 'Отменить' : 'Присоединиться'}
        </Button>
      </Modal>
    )
  }

  return null
}
