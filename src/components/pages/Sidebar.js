import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <section id='sidebar' className='sidebar bg-gray-800 text-teal-50'>
      <nav>
        <br />
        <ul className="list-items ml-5 mt-5">
          <Link to={"/dashboard"}><li className="list-item bg-teal-500 w-full p-3 rounded hover:bg-teal-800 cursor-pointer"><GridViewIcon /> Dashboard</li></Link>
          
          <Link to={'/addcourse'}>
          <li className="list-item bg-teal-500 w-52 p-3 rounded hover:bg-teal-800 cursor-pointer"><AddBoxIcon /> Kurs Qo'shish</li>
          </Link>
          <Link to={"/chart"}>
          <li className="list-item bg-teal-500 w-52 p-3 rounded hover:bg-teal-800 cursor-pointer"><ChecklistIcon /> Statistika</li>
          </Link>
         <Link to={"/settings"}>
         <li className="list-item bg-gray-700 w-52 p-3 rounded hover:bg-teal-800 cursor-pointer"><SettingsIcon /> Sozlanmalar</li>
         </Link>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar