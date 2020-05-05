import { Card, Tabs } from 'antd'
import React from 'react'
import './index.css'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

const { TabPane } = Tabs

export const LoginRegister = () => {
	return (
		<Card className='LoginRegister' style={{ width: 500 }}>
			<Tabs defaultActiveKey='1'>
				<TabPane tab='Вход' key='1'>
					<LoginForm />
				</TabPane>
				<TabPane tab='Регистрация' key='2'>
					<RegisterForm />
				</TabPane>
			</Tabs>
		</Card>
	)
}
