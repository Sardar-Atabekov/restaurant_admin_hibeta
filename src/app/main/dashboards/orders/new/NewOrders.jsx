/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from '@mui/material'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import GET_NEW_ORDERS from '../../../../../graphApi'
import CustomSelect from '../../home/customSelect/CustomSelect'
import { Button } from '../../home/button/Button'
import TableCellOrders from './modal/TableCellOrders'

// import { decrement } from '../store/counterSlice'

function NewOrders() {
	const today = new Date().toLocaleString()
	const { loading, error, data , refetch} = useQuery(GET_NEW_ORDERS)
	if (loading) return <p>loading</p>
	if (error) return <p>{error.message}</p>

	const orderList = data?.orders?.items

	return (
		<Container>
			<div className='flex  justify-between w-full h-52'>
				<p className='text-6xl font-bold tracking-tight leading-8'>
					Новые заказы
				</p>
				<div className='text-gray font-500 '> {today}</div>
			</div>
			<div className='flex'>
				<CustomSelect />
				<Button />
			</div>
			<StyledTableContainer component={StyledPaper}>
				<Table>
					<TableHead>
						<StyledTableRow>
							<StyledTableCell>№ заказа</StyledTableCell>
							<StyledTableCell>Заказ поступил </StyledTableCell>
							<StyledTableCell>Меню заказа</StyledTableCell>
							<StyledTableCell>Сумма</StyledTableCell>
							<StyledTableCell>Статус</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{orderList.map((item, key) => {
							return <TableCellOrders key={key} item={item} refetch={refetch}/>
						}
							
						)}
					</TableBody>
				</Table>
			</StyledTableContainer>
		</Container>
	)
}
const Container = styled.div`
	width: 1300px;
	padding: 50px 80px 100px 30px;
`

const StyledTableRow = styled(TableRow)`
	border-bottom: 1.1px solid #3c3756;
	width: 1200px;
`

const StyledTableCell = styled(TableCell)`
	line-height: 20px;
	font-weight: bold;
	font-size: 18px;
`

const StyledTableContainer = styled(TableContainer)`
	box-shadow: none;
	width: 100%;
	background-color: #f2f2f9;
`
const StyledPaper = styled(Paper)`
	&::-webkit-scrollbar {
		background-color: transparent;
		width: 0.4rem;
		border-radius: 10rem;
	}
	&::-webkit-scrollbar-thumb {
		border: 4px solid #c4c4c4;
		border-radius: 5px;
		transform: rotate(90deg);
	}
	&::-webkit-scrollbar-thumb:hover {
		border: 4px solid #bdbdbd;
	}
	margin-top: 72px;
`

export default NewOrders
