import { Button } from '@mui/material'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { db, storage } from '../../config'
import {v4} from "uuid"
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
const Add = () => {
  const {handleSubmit,register} = useForm()
  const [progress,setProgress] = useState(0)
  function save(data){
    const storageRef = ref(storage,`courses/${v4()+data.video[0].name}`)
    
    const uploadTask = uploadBytesResumable(storageRef,data.video[0])
    
    uploadTask.on('state_changed',(snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
      console.log("Upload "+progress + "% done");
      setProgress(Math.floor(progress))
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
    const {title,poster,message,option} = data
   addDoc(collection(db,`${option}`),{
    video:url,
    title,
    poster,
    option,
    message
  }).then(res=>{
    alert("added")
  })
  }
  return (
    <div className='container mx-auto bg-gray-900 add-course-section'>
      <form onSubmit={handleSubmit(save)} className='p-9'>
      <input {...register("video")} type="file" className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100' />
      <br /><br />
      <input {...register("title")} type="text" placeholder='title'
      className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12'
      />
      <br /><br />
      <input {...register("poster")} type="text" placeholder='poster'
      className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12'
      />
      <br /><br />
      <select name="" id="" {...register("option")} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option value="html">Html</option>
        <option value="css">Css</option>
        <option value="js">JS</option>
        <option value="react">React</option>
        <option value="bootstrap">Bootstrap</option>
      </select>
      <br /><br />
      <textarea name="" id="" className='w-4/12' cols="30" rows="10"
      {...register("message")}
      ></textarea>
      <br /><br />
      <button type="submit" className="bg-indigo-500 p-3 w-4/12 text-teal-50" >
    Upload {`${progress} %`} 
</button>
      </form>
    </div>
  )
}

export default Add