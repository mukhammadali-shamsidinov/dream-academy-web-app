import { Button } from '@mui/material'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { db, storage } from '../../config'
import { v4 } from "uuid"
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify'
const Add = () => {
  const { handleSubmit, register } = useForm()
  const [progress, setProgress] = useState(0)
  function save(data) {
    const storageRef = ref(storage, `courses/${v4() + data.video[0].name}`)

    const uploadTask = uploadBytesResumable(storageRef, data.video[0])

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log("Upload " + progress + "% done");
      setProgress(Math.floor(progress))
    }, (err) => {

    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        sendingDatabase(data, downloadURL)
      })
    })
  }

  const sendingDatabase = (data, url) => {
    console.log(data, url);
    const { title, poster, message, option, sort } = data
    addDoc(collection(db, `${option}`), {
      video: url,
      title,
      poster,
      option,
      message,
      sort
    }).then(res => {
      toast.success("added")
    })
  }
  return (
    <div className='container mx-auto add-course-section h-full' >
      <form onSubmit={handleSubmit(save)} className='p-9'>
        <div className="flex gap-3 mb-2">
          <input {...register("title")} type="text" placeholder='title'
            className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12'
          />
          <input {...register("poster")} type="text" placeholder='poster'
            className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12'
          />
        </div>
        <div className="flex gap-3">

          <input type="number" placeholder='sort' {...register("sort")} className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12' />

          <select name="" id="" {...register("option")} className='w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="javascript">JS</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="firebase">Firebase</option>
          </select>



        </div>

        <br /><br />
        <input {...register("video")} type="file" className='w-2/4 block  text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100' />
        <br /><br />
        <textarea name="" id="" className='w-8/12' cols="30" rows="10"
          {...register("message")}
        ></textarea>
        <br /><br />
        <button  type="submit" className="bg-indigo-500 p-3 w-8/12 text-teal-50" >
          Upload
        </button>
        <br /><br />
        {progress ? 
        <div class="w-8/12 bg-gray-200 rounded-full dark:bg-gray-700 ">
        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center ease-in duration-300 p-0.5 leading-none rounded-full w-full" style={{"width":`${progress}%`}}> {progress}%</div>
      </div>
      :  
      ""}


      </form>
    </div>
  )
}

export default Add