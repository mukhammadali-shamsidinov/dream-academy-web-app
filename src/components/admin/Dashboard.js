import { Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { length } from './Admin'

const Dashboard = () => {
  const {isLengthUser,isCourse} = useContext(length)
  const [val,setVal] = useState("300")
  console.log(isLengthUser);
  return (
    <div>
      <div className="flex justify-between h-40 m-3 gap-3">
        <div className="cart h-full bg-teal-500 w-full flex items-center flex-col justify-center">
          <Typography variant='h3' color={"white"}>Kurslar</Typography>
          <Typography variant='h5' color={"lightblue"}>{isCourse.length}+</Typography>
        </div>
        <div className="cart h-full bg-teal-500 w-full flex items-center flex-col justify-center">
          <Typography variant='h3' color={"white"}>O'quvchilar</Typography>
          <Typography variant='h5' color={"lightblue"}>{isLengthUser.length}+</Typography>
        </div>
        <div className="cart h-full bg-teal-500 w-full flex items-center flex-col justify-center">
          <Typography variant='h3' color={"white"}>Summa</Typography>
          <input className='block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number'defaultValue={300} onChange={e=>setVal(e.target.value)} />
          <Typography variant='h5' color={"lightblue"}><span className=' bg-purple-100 text-purple-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
          {((isLengthUser.length) * Number(val))} so'm</span></Typography>
        </div>
      </div>
    </div>
  )
}

export default Dashboard