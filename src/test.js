import { Button } from '@mui/material'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React from 'react'
import { useForm } from 'react-hook-form'
import { db, storage } from './config'
import {v4} from "uuid"
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
const Test = () => {
  const {handleSubmit,register} = useForm()
  function save(data){
    const storageRef = ref(storage,`courses/${v4()+data.video[0].name}`)
    
    const uploadTask = uploadBytesResumable(storageRef,data.video[0])
    
    uploadTask.on('state_changed',(snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
      console.log("Upload "+progress + "% done");
    },(err)=>{

    },()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        console.log("File available at",downloadURL);
        sendingDatabase(data,downloadURL)
      })
    })
  }

  const sendingDatabase = (data,url)=>{
    console.log(data,url);
    const {title,poster,message} = data
   addDoc(collection(db,"courses"),{
    video:url,
    title,
    poster,
    message
  }).then(res=>{
    alert("added")
  })
  }
  return (
    <div className='container mx-auto bg-gray-900'>
      <form onSubmit={handleSubmit(save)}>
      <input {...register("video")} type="file" />
      <br /><br />
      <input {...register("title")} type="text" placeholder='title' />
      <br /><br />
      <input {...register("poster")} type="text" placeholder='poster' />
      <br /><br />
      <textarea name="" id="" cols="30" rows="10"
      {...register("message")}
      ></textarea>
      <br /><br />
      <Button variant='contained' type='submit'>click</Button>
      </form>
    </div>
  )
}

export default Test