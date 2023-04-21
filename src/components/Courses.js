import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {collection, onSnapshot} from "firebase/firestore"
import { db } from '../config'

const Courses = ({data}) => {
  const [posts,setPosts] = useState([])

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
    <div className='card-section'>
      <div className="courses-title">
        <h1 className='text-5xl text-center'>Courses</h1>
      </div>
      <div className="courses-card-items flex justify-between">
      {posts.length > 0 ? posts.map(item=>(
                <div key={item.id} className="courses-card-item bg-gray-800 mt-9 rounded drop-shadow-2xl">
                  <div className="cart-head">
                    <img className='rounded' src={item.image} alt={item.image} />
                  </div>
                  <div className="cart-body">
                    <h3 className='cart-title'>{item.title}</h3>
                    <span>{item.price}</span>
                    <p>Darslar soni:{item.descr}</p>
                    <Link onClick={()=>data(item)} to={`/details/${item.title}`}><Button className='w-48' variant='outlined' color='inherit'>Kursga Kirish</Button></Link>
                  </div>
                </div>
      )):"Loading..."}
      </div>
    </div>
  )
}

export default Courses