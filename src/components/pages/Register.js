import { Button, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'

import { useForm } from 'react-hook-form'
import { auth, db } from '../../config'
import { toast } from 'react-toastify'
const Register = () => {
  const {register,handleSubmit,reset} = useForm()
  
  function save(data){
    createUserWithEmailAndPassword(auth,data.email,data.password).then(userData=>{
      addDoc(collection(db,"users"),{
        name:data.username,
        email:data.email,
        password:data.password,
        uuid:userData.user.uid
      }).then(res=>{
        toast.success("success")
      })

    }).catch(err=>{
     toast.error(err.message);
    })


    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <TextField type='text' {...register("username")} fullWidth placeholder='UserName' />
        <br /><br />
        <TextField type='email' {...register("email")} fullWidth placeholder='Email' />
        <br /><br />
        <TextField type='password' {...register("password",{
     
          minLength:6
        })} fullWidth placeholder='Password' />
        <br /><br />
        <Button type='submit' variant='contained' color='success' fullWidth>Register</Button>
      </form>
    </div>
  )
}

export default Register