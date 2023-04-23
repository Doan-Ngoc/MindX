import React from 'react'
import "./ChartContainer.css"
import ChartItem from '../ChartItem/ChartItem'

const ChartContainer = (props) => {
  const { selectedYear, expenseList } = props

  return (
    <div className='chart-container '>
      <ChartItem
        key={selectedYear}
        selectedYear={selectedYear}
        expenseList={expenseList} />
      <div className='month-list d-flex flex-wrap justify-content- '>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Jan</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Feb</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Mar</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Apr</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">May</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Jun</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Jul</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Aug</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Sep</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Oct</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Nov</span>
        <span className="col-lg-1 col-md-2 col-sm-3 mb-3">Dev</span>
      </div>
    </div>
  )
}

export default ChartContainer