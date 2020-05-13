import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Affix, Layout, Menu, Spin } from 'antd'
import React, { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Locked } from '../../shared/components/Locked'
import { IRootState } from '../../store/state'
import { GameForm } from '../gameForm'
import { gameFormActions } from '../gameForm/actions'
import { GameModal } from '../gameModal'
import { userControlActions } from '../userControl/actions'
import './index.css'

const { Header, Content, Footer, Sider } = Layout

interface IPageWrapperProps {
  children: ReactNode
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const { user, isFetching } = useSelector(
    (state: IRootState) => state.userControl,
  )
  const isLoggedIn = user !== null
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userControlActions.logout())
  }

  const handleGameFormOpen = () => {
    dispatch(gameFormActions.openForm(null))
  }

  const location = useLocation()

  if (isFetching) {
    return <Spin />
  }

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
                selectedKeys={[location.pathname]}
                style={{ height: '100%' }}
              >
                <Menu.Item key='1' className='link-divided'>
                  {isLoggedIn ? (
                    <>
                      <UserOutlined /> {`${user?.firstName} ${user?.lastName}`}
                    </>
                  ) : (
                    <Link to='/login-register'>Войти</Link>
                  )}
                </Menu.Item>

                <Menu.Item key='/'>
                  <Link to='/'>Главная</Link>
                </Menu.Item>
                <Menu.Item key='3' disabled={!isLoggedIn}>
                  <Locked active={!isLoggedIn} />
                  Личный кабинет{' '}
                </Menu.Item>
                <Menu.Item key='/created-by-me' disabled={!isLoggedIn}>
                  <Link to='/created-by-me'>
                    <Locked active={!isLoggedIn} />
                    Созданные мной
                  </Link>
                </Menu.Item>
                <Menu.Item key='/joined' disabled={!isLoggedIn}>
                  <Link to='/joined'>
                    <Locked active={!isLoggedIn} />Я участвую
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key='6'
                  className='link-divided'
                  disabled={!isLoggedIn}
                  onClick={handleGameFormOpen}
                >
                  <Locked active={!isLoggedIn} />
                  <PlusOutlined />
                  Событие
                </Menu.Item>

                <Menu.Item key='7'>О системе</Menu.Item>
                {user && (
                  <Menu.Item key='8' onClick={handleLogout}>
                    Выход
                  </Menu.Item>
                )}
              </Menu>
            </Affix>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
            {children}
            <GameForm />
            <GameModal />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        WantGame ©2020 Created by Nikak
      </Footer>
    </Layout>
  )
}
