import React from 'react'
import { Outlet } from 'react-router-dom'
import StockList from '../stockList/StockList'

const DiscountTable = () => {
  return (
    <div>
        <StockList/>
        <Outlet/>
    </div>
  )
}

export default DiscountTable