import React from 'react'
import './FilterByYear.css'

const FilterByYear = () => {
  return (
    <div className='filter-section'>
      <span>Filter by year</span>
      <select defaultValue="2022">
        <option value = "2021">2021</option>
        <option value = "2022">2022</option>
        <option value = "2023">2023</option>
        <option value = "2024">2024</option>
      </select>
    </div>
  )
}

export default FilterByYear