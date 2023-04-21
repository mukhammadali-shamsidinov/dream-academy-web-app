import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import './Admin.css'
const Admin = () => {
  return (
    <div>
      <header className='w-full h-14 bg-gray-800 text-gray-50 px-3 flex items-center text-3xl'>
        <h1>Admin Panel</h1>
      </header>
      <hr />
      <div className="flex">
      <Sidebar />
      <Content />
      </div>
     
    </div>
  )
}

export default Admin