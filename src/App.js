import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/pages/Details';
import { useState } from 'react';

function App() {
  const [details,setDetails] = useState({})
  function data(data){
    console.log(data);
    localStorage.setItem('items',JSON.stringify(data));

    setDetails(data)
  }
  return (
    <div className="app">
               <Navbar /><br />
        <Home />
        <br />
      <Routes>
       <Route path='/' element={
        <>

        <Gallery />
        <br />
        <Courses data={data} />
        <div className="clr"></div>
       
        </>
       } />

       <Route path='/details/*' element={<Details data={details} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
