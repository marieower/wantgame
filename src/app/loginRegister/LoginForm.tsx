import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { phonePattern } from '../../shared/constants/phonePattern'

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
}

export const LoginForm = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			layout='vertical'
			name='basic'
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label='Номер телефона'
				name='phone'
				rules={[
					{ required: true, message: 'Введите номер телефона!' },
					{
						pattern: phonePattern,
						message:
							'Неверный номер телефона! Введите номер в формате +7 XXX XXX XX XX',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Пароль'
				name='password'
				rules={[{ required: true, message: 'Введите пароль!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item {...tailLayout} name='remember' valuePropName='checked'>
				<Checkbox>Запомнить?</Checkbox>
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit'>
					Подтвердить
				</Button>
			</Form.Item>
		</Form>
	)
}
