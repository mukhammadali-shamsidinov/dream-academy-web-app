import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config'
import { onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'

const UserData = () => {
  const [posts,setPosts] = useState([])
  function deleteItem(uuid,id){
    onAuthStateChanged(auth,(user)=>{
      if(uuid == user.uid){
        if(user.delete()){
          deleteDoc(doc(db,"users",id)).then(()=>{
            toast.dark("deleted")
          })
        }
      }

    })
  }
  useEffect(()=>{
    onSnapshot(collection(db,"users"),(snapshot)=>{

      setPosts(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
  },[])
  return (
    <div>
      <Table component={Paper}>
        <TableHead>
          <TableRow>
          <TableCell>name</TableCell>
          <TableCell>email</TableCell>
          <TableCell>password</TableCell>
          <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {posts.length > 0 ? posts.map(item=>(
          <TableRow>
             <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.password}</TableCell>
          <TableCell align='center'>
            <Button variant='outlined' color='error' onClick={()=>deleteItem(item.uuid,item.id)}>Delete</Button>
          </TableCell>
          </TableRow>
         )):posts.length == 0 ? <Typography color={"GrayText"} variant='overline' align='center'>Not Users</Typography> :<div className='ring-course mt-9'>
         <span class="loader"></span></div>}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserData