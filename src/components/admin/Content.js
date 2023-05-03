import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Add from './Add'
import User from './User'

const Content = () => {
  return (
    <div className='content bg-gray-800'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addcourse' element={<Add />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </div>
  )
}

export default Content