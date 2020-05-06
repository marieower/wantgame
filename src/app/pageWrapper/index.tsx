import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Affix, Divider, Layout, Menu } from 'antd'
import React, { ReactNode } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store/state'

const { Header, Content, Footer, Sider } = Layout

interface IPageWrapperProps {
  children: ReactNode
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const { user } = useSelector((state: IRootState) => state.userControl)
  return (
    <Layout className='PageWrapper'>
      <Header className='header'>
        <div className='logo' />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className='site-layout-background'
          style={{ padding: '24px 0', marginTop: '24px' }}
        >
          <Sider className='site-layout-background' width={200}>
            <Affix>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key='1'>
                  <UserOutlined /> {`${user?.firstName} ${user?.lastName}`}
                </Menu.Item>
                <Menu.Item>
                  <Divider />
                </Menu.Item>

                <Menu.Item key='2'>Главная</Menu.Item>
                <Menu.Item key='3'>Личный кабинет</Menu.Item>
                <Menu.Item key='4'>Созданные мной</Menu.Item>
                <Menu.Item key='5'>Я участвую</Menu.Item>
                <Menu.Item key='6'>
                  <PlusOutlined />
                  Создать событие
                </Menu.Item>
                <Menu.Item>
                  <Divider />
                </Menu.Item>

                <Menu.Item key='7'>О системе</Menu.Item>
                <Menu.Item key='8'>Выход</Menu.Item>
              </Menu>
            </Affix>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        WantGame ©2020 Created by Nikak
      </Footer>
    </Layout>
  )
}
