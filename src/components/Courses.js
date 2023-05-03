import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {collection, onSnapshot} from "firebase/firestore"
import { db } from '../config'
import { User } from '../App'

const Courses = ({data}) => {
  const {user} = useContext(User)
  const [posts,setPosts] = useState([])
  const [search,setSearch] = useState("")
  const getCourses = ()=>{
    const unsubscribe = onSnapshot(
      collection(db, "courses"), 
      (snapshot) => {
        setPosts(snapshot.docs.map(item=>({id:item.id,...item.data()})))
        console.log(posts);
      },
      (error) => {
        console.log(error);
      });
  }


  useEffect(()=>{
    getCourses()
  },[])

  return (
    <>
   
     <div className='card-section' id='kurslar'>
      <div className="courses-title">
        <h1 className='text-5xl text-center'>Courses</h1>
      </div>
      <div className="search mt-3 flex justify-end">
        <input type="text"
        onChange={e=>setSearch(e.target.value)}
        placeholder='Search'
        className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12' />
      </div>
      <div className="courses-card-items flex justify-between">
      {posts.length > 0 ? posts.sort((c,b)=>Number(c.sort) > Number(b.sort) ? 1 : -1).filter((c=>{
        if(search === ""){
          return c
        }else if(c.title.toLowerCase().includes(search.toLowerCase())){
          return c
        }
        return
      })).map(item=>(
                <div key={item.id} className="courses-card-item bg-gray-800 mt-9 rounded drop-shadow-2xl">
                  <div className="cart-head">
                    <img className='rounded' src={item.image} alt={item.image} />
                  </div>
                  <div className="cart-body">
                    <h3 className='cart-title'>{item.title}</h3>
                    {/* <span>{item.price}</span> */}
                    <p>{item.descr}</p>
                    <Link onClick={()=>data(item)} to={`/web/${user.uid}/details/${item.title}`}><Button className='w-48' variant='outlined' color='inherit'>Kursga Kirish</Button></Link>
                  </div>
                </div>
      )):<div className='ring-course'>
        <span class="loader"></span></div>}
      </div>
    </div>
    </>
   
  )
}

export default Courses