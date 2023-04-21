import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Add from './Add'

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addcourse' element={<Add />} />
      </Routes>
    </div>
  )
}

export default Content