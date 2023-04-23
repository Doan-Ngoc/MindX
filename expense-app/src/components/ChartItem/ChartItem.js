import React from 'react'
import "./ChartItem.css"

const ChartItem = (props) => {
  const { selectedYear, expenseList } = props
  //Lọc ra những expense của năm đang chọn
  const expensesForSelectedYear = expenseList.filter(
    (expense) => new Date(expense.expenseDate).getFullYear() == selectedYear
  )
  //Cộng số tiền chi tiêu cho mỗi tháng
  const monthlyExpenses = Array(12).fill(0)
  expensesForSelectedYear.forEach((expense) => {
    const month = new Date(expense.expenseDate).getMonth()
    monthlyExpenses[month] += parseInt(expense.expenseAmount)
   console.log(monthlyExpenses[0])
  })
  //Set giá trị max cho các bar
  const maxExpense = 1000
  //Tính chiều cao của các bar
  const barHeights = monthlyExpenses && monthlyExpenses.map((expenseThatMonth) =>
    Math.min(1, expenseThatMonth / maxExpense)
  )

  return (
    <div className='chart-item-list d-flex flex-wrap justify-content-between'>
      {barHeights.map((barHeight, index) => (
        <div className="chart-item col-lg-1 col-md-2 col-sm-3 mb-3" key={index}>
          <div className='fill' style={{ height: `${barHeight * 100}%` }}></div>
        </div>
      ))}

    </div>
  )
}

export default ChartItem
