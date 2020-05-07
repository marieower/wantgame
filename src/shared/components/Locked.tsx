import { LockFilled } from '@ant-design/icons'
import { Popover } from 'antd'
import React from 'react'

export const Locked = ({ active }: { active: boolean }) =>
  (active && (
    <Popover content='Это доступно только зарегистрированным пользователям'>
      <LockFilled />
    </Popover>
  )) ||
  null
