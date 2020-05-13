import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Switch,
  TimePicker,
} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { gameFormActions } from './actions'

export const GameForm = () => {
  const { opened, isFetching, error } = useSelector(
    (state: IRootState) => state.gameForm,
  )

  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(gameFormActions.closeForm())
  }

  const onFinish = (values: any) => {
    const formattedValues = values

    const date = new Date(formattedValues.date)
    const time = new Date(formattedValues.time)

    var datetime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
    )

    formattedValues.time = new Date(datetime)
    delete formattedValues.date

    formattedValues.sportId = Number(formattedValues.sportId)

    dispatch(gameFormActions.add(values))
  }

  if (opened) {
    return (
      <Modal
        title={'Новое событие'}
        visible={opened}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item
            name='name'
            rules={[
              { required: true, message: 'Введите название мероприятия!' },
            ]}
            label='Название'
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='sportId'
            label='Вид спорта'
            rules={[
              {
                required: true,
                message: 'Выберите вид спорта!',
              },
            ]}
          >
            <Select>
              <Select.Option value='1'>Футбол</Select.Option>
              <Select.Option value='2'>Баскетбол</Select.Option>
              <Select.Option value='3'>Волейбол</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Количество игроков' required={true}>
            <Input.Group compact={true}>
              <Form.Item
                name='minimumPlayers'
                rules={[
                  {
                    required: true,
                    message: 'Введите минимальное число игроков!',
                  },
                ]}
                style={{ width: 100, textAlign: 'center' }}
              >
                <InputNumber placeholder='Мин.' />
              </Form.Item>

              <Form.Item
                name='maximumPlayers'
                rules={[
                  {
                    required: true,
                    message: 'Введите максимальное число игроков!',
                  },
                ]}
                style={{ width: 100, textAlign: 'center' }}
              >
                <InputNumber placeholder='Макс.' />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            name='place'
            label='Место проведения'
            rules={[
              {
                required: true,
                message: 'Введите место проведения мероприятия!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label='Дата/время' required={true}>
            <Input.Group compact={true}>
              <Form.Item
                name='date'
                rules={[
                  {
                    required: true,
                    message: 'Введите дату проведения мероприятия!',
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name='time'
                rules={[
                  {
                    required: true,
                    message: 'Введите время проведения мероприятия!',
                  },
                ]}
              >
                <TimePicker />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label='Стоимость'
            rules={[
              {
                required: true,
                message: 'Введите стоимость!',
              },
            ]}
            name='cost'
          >
            <InputNumber />
          </Form.Item>

          <Form.Item name='canInvite' label='Можно приглашать на мероприятие?'>
            <Switch />
          </Form.Item>

          <Form.Item name='isClosed' label='Закрытое мероприятие?'>
            <Switch />
          </Form.Item>

          <Form.Item
            name='description'
            rules={[
              {
                required: true,
                message: 'Введите описание мероприятия!',
              },
            ]}
            label='Описание'
          >
            <TextArea />
          </Form.Item>

          <Form.Item>
            <Button
              block={true}
              loading={isFetching}
              type='primary'
              htmlType='submit'
            >
              Создать
            </Button>
          </Form.Item>

          {error && <Alert closable={true} message={error} type='error' />}
        </Form>
      </Modal>
    )
  }

  return null
}
