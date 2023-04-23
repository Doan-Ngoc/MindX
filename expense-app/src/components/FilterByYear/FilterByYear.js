import React from 'react'
import './FilterByYear.css'
import { useState } from 'react';

const FilterByYear = (props) => {
  const { years, selectedYear, getSelectedYear } = props
  const handleYearChange = (event) => {
    getSelectedYear(event.target.value)
  }
  return (
    <div className='filter-section'>
      <span>Filter by year</span>
      <select value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year} >
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterByYear
