import { Card, Spin, Tabs, Alert } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IRootState } from '../../store/state'
import './index.css'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

const { TabPane } = Tabs

export const LoginRegister = () => {
  const { isFetching, user, error } = useSelector(
    (state: IRootState) => state.userControl,
  )
  const history = useHistory()

  useEffect(() => {
    if (user !== null) {
      history.push('/')
    }
  }, [user, history])

  return (
    <div className='LoginRegister-container'>
      <Card className='LoginRegister' style={{ width: 500 }}>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Вход' key='1'>
            <LoginForm />
          </TabPane>
          <TabPane tab='Регистрация' key='2'>
            <RegisterForm />
          </TabPane>
        </Tabs>

        {error && <Alert closable={true} message={error} type='error' />}

        {isFetching && (
          <div className='LoginRegister-container__dimmer'>
            <Spin
              className='spin'
              size='large'
              tip='Пожалуйста, подождите...'
            />
          </div>
        )}
      </Card>
    </div>
  )
}
