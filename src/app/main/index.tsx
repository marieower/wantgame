import { Avatar, Card, List } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameDto } from '../../shared/dto/GameDto'
import { IRootState } from '../../store/state'
import { PageWrapper } from '../pageWrapper'
import { mainActions } from './actions'

export const Main = () => {
	const { games, isFetching } = useSelector((state: IRootState) => state.main)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(mainActions.loadData())
	}, [dispatch])

	const renderList = () => {
		return (
			<List
				grid={{ gutter: 20, column: 3 }}
				dataSource={games as GameDto[]}
				loading={isFetching}
				renderItem={(item: GameDto) => (
					<List.Item>
						<Card
							cover={
								<img
									alt='example'
									src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
								/>
							}
							title={item.name}
						>
							<Meta
								avatar={
									<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
								}
								title={`${item.owner.firstName} ${item.owner.lastName}`}
								description='This is the description'
							/>
						</Card>
					</List.Item>
				)}
			/>
		)
	}

	return <PageWrapper>{renderList()}</PageWrapper>
}
