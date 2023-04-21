import React from 'react'
import './FilterByYear.css'

const FilterByYear = () => {
  return (
    <div className='filter-section'>
      <span>Filter by year</span>
      <select>
        <option>2021</option>
        <option selected  >2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  )
}

export default FilterByYear