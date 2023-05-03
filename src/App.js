import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/pages/Details';
import { createContext, useEffect, useState } from 'react';
import Map from './components/Map';
import Login from './components/Register/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';
import Profile from './components/Profile';
export const User = createContext()

function App() {
  const [details, setDetails] = useState({})
  const [user,setUser] = useState({})
  function data(data) {
    console.log(data);
    localStorage.setItem('items', JSON.stringify(data));

    setDetails(data)
  }


  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      console.log(user.email);
      setUser(user)
      console.log(user);
    })
  },[])

  return (
    <User.Provider value={{user}}>
 <div className="app">

<Routes>
  <Route path='/' element={<Login />} />
  <Route path={`/web/${user.uid}`} element={
    <>
      <Navbar user={user} /><br />
      <Home />
      <br />
      <Gallery />
      <br />
      <Courses data={data} />
      <br />
      <Map />
      <div className="clr"></div>
      <Footer />
    </>
  } />
  <Route path={`/web/${user.uid}/profile`}  element={<Profile user={user} />} />

  <Route path={`/web/${user.uid}/details/*`} element={<>
    <Navbar user={user} />
    <Details data={details} />
  </> } />
</Routes>

</div>
    </User.Provider>
   
  );
}

export default App;
