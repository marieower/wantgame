import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { phonePattern } from '../../shared/constants/phonePattern'
import { userControlActions } from '../userControl/actions'

export const LoginForm = () => {
  let initialValues = {
    phone: localStorage.getItem('phone') || '',
    password: localStorage.getItem('password') || '',
    remember: true,
  }

  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    if (values.remember) {
      localStorage.setItem('phone', values.phone)
    } else {
      localStorage.clear()
    }

    dispatch(userControlActions.login(values))
  }

  return (
    <Form
      layout='vertical'
      name='basic'
      initialValues={initialValues}
      onFinish={onFinish}
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

      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Запомнить?</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  )
}
