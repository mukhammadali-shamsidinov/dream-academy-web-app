import React, { useState } from 'react'
import CustomizedAccordions from '../Accordion'

const Details = () => {
  const [items] = useState(JSON.parse(localStorage.getItem("items")))


  return (
    <div className='details-section'>
      <div className="details-items">
      <CustomizedAccordions data={items} />
      </div>

    </div>
  )
}

export default Details