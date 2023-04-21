import React from 'react'

const Gallery = () => {
  return (
    <div className='gallery-section flex justify-between '>
      <div className="gallery-title">
      <h1 className='text-3xl w-96 font-bold'>Istalgan joyda, o’zingizga qulay vaqtda o’qish imkoniyati</h1>
      </div>
      <div className="gallery-items flex text-center font-bold">
        <div className="gallery-item bg-gray-100 rounded mx-3 h-40 p-3">
          <span className='text-cyan-800 text-5xl '>10+</span>
          <p className='text-xl'>Jami tahsil olayotgan o’quvchilarimiz</p>
        </div>
        <div className="gallery-item bg-gray-100 rounded mx-3 h-40 p-3">
        <span className='text-cyan-800 text-5xl'>10+</span>
          <p className='text-xl'>Jami tahsil olayotgan o’quvchilarimiz</p>
        </div>
        <div className="gallery-item bg-gray-100 rounded mx-3 h-40 p-3">
        <span className='text-cyan-800 text-5xl'>3+</span>
          <p className='text-xl'>Uzoq yillik tajribaga ega ustozlarimiz</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery