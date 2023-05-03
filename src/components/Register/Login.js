import { Button, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../../config'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram';

const Login = () => {
  const {register,handleSubmit} = useForm()
  
const navigate = useNavigate()
  function login(data){
   const {email,password} = data

   signInWithEmailAndPassword(auth,email,password).then(user=>{
    toast.success("Loginned")
    setTimeout(()=>{
      navigate(`/web/${user.user.uid}`)
    },3000)
   
   }).catch(err=>{
    toast.error("error")
   })
  }

  return (
    <div className='bg-gray-800 h-screen'>
        <ToastContainer />
      <form onSubmit={handleSubmit(login)} className='flex flex-col w-4/12 mx-auto justify-center h-full p-3'>
      <Typography variant='h4' className='text-center'>
        <span className='text-orange-400'>Dream</span> <span className='text-teal-400'>Academy</span>
      </Typography><br />
        <TextField {...register("email")} type='email' placeholder='email' />
        <br />
        <TextField {...register("password")} type='password' placeholder='password' />
        <br />
        <Button variant='contained' type='submit' color='info'>Login</Button>
        <br />
          <Typography className='login-phone-number transition ease-in bg-gray-900 hover:bg-teal-600 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' color={'InfoBackground'}>Murojat uchun tel +998(91) 922-62-96</Typography>
           </form>

    </div>
  )
}

export default Login