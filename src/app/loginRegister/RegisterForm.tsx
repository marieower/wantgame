import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { phonePattern } from '../../shared/constants/phonePattern'
import { userControlActions } from '../userControl/actions'

export const RegisterForm = () => {
  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    dispatch(userControlActions.register(values))
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
        label='Имя'
        name='firstName'
        rules={[{ required: true, message: 'Введите имя!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Фамилия'
        name='lastName'
        rules={[{ required: true, message: 'Введите фамилию!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Номер телефона'
        name='phone'
        rules={[
          { required: true, message: 'Введите номер телефона!' },
          {
            pattern: phonePattern,
            message:
              'Неверный номер телефона! Введите номер в формате XXX XXX XX XX',
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
      <Form.Item
        label='Обо мне'
        name='aboutMe'
        rules={[{ required: true, message: 'Обязательное поле!!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  )
}
