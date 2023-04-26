import { Typography } from '@mui/material'
import React, { createContext } from 'react'

import BasicModal from './Modal';
import UserData from './UserData';
import { ToastContainer } from 'react-toastify';
export const Data = createContext()

const User = () => {

  return (
    <Data.Provider >

 <div className='p-5'>
 <ToastContainer />
      <div className="flex justify-between">
        <Typography variant='h4' className='text-teal-50'>Userlar</Typography>
        <BasicModal />
      </div>
      <div className="crud mt-9">
        <UserData />
      </div>
    </div>
    </Data.Provider>
   
  )
}

export default User