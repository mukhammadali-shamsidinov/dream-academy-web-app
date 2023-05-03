import React, { createContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import './Admin.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../config'
export const length = createContext()
const Admin = () => {
  const [isLengthUser,setIsLengthUser] = useState([])
  const [isCourse,setIsCourse] = useState([])
  useEffect(()=>{
    onSnapshot(collection(db,'users'),(snapshot)=>{
      setIsLengthUser(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
    onSnapshot(collection(db,'courses'),(snapshot)=>{
      setIsCourse(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
  },[])
  return (
    <length.Provider value={{isLengthUser,isCourse}}>
      <header className='w-full h-14 bg-gray-800 text-gray-50 px-3 flex items-center text-3xl'>
        <h1>Admin Panel</h1>
      </header>
      <hr />
      <div className="flex">
      <Sidebar />
      <Content />
      </div>
     
    </length.Provider>
  )
}

export default Admin