import React from 'react'
import ResponsiveAppBar from './Nav'

const Navbar = ({user}) => {
  return (
    <div>
      <ResponsiveAppBar userEmail={user} />
    </div>
  )
}

export default Navbar