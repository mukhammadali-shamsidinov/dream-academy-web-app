
import { Avatar, Badge, Stack } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const Profile = ({user}) => {
  return (
    <div className='p-5'>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" to={`/web/${user.uid}`}>GO Home</Link>
      <div className="container mx-auto flex justify-center items-center h-screen">
      <div class="max-w-sm rounded overflow-hidden shadow-lg flex justify-center flex-col items-center text-center">
      <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar sx={{ width: 56, height: 56 }} alt={user.email.toUpperCase()} src="/static/images/avatar/1.jpg" />
      </StyledBadge>
     
    </Stack>

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{user.email}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#email</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#courses</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nick</span>
    </div>
  </div>
  </div>

    </div>
  )
}

export default Profile