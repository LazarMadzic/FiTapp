import React from 'react';
import Header from './components/Header';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <>
      <Router>

        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/workouts' element={<Workouts/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
          
        </div>
     
      </Router>
      
        <BackToTop/>

 
      <ToastContainer/>
    </>
  );
}

export default App;
