import { Card, Tabs, Spin } from 'antd'
import React from 'react'
import './index.css'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store/state'

const { TabPane } = Tabs

export const LoginRegister = () => {
  const { isFetching } = useSelector((state: IRootState) => state.userControl)
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
        )}
      </Card>
    </div>
  )
}
