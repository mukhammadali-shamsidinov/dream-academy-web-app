import { Button } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <main className='main-section bg-teal-50  p-5 rounded mt-5 flex justify-between items-center' id='asosiy'>
      <div className="main-title w-full">
        <h3 className='mt-3 text-cyan-400 text-5xl'>Dream Academy Ta'lim Platformasiga</h3>
        <p className='mt-3 text-3xl'>Dasturlashga oid kasblarni o’rgatamiz</p>
        <br />
        <Button  variant='outlined' color='info' className='mt-5'>O'qishni Boshlash</Button>
      </div>
      <div className="main-images w-full">
        <img className='w-50 h-96' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg" alt="" />
      </div>
    </main>
  )
}

export default Home