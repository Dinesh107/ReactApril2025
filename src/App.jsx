import viteLogo from '/vite.svg'
import './App.css'
import Garage from './components/Garage'
import FavoriteColor from './components/FavoriteColor'
import Bike from './components/Bike'
import List from './components/List'
import Timer from './components/Timer'
import MyForm from './components/MyForm'
import MyForm2 from './components/MyForm2'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <>
      {/* <Garage/> */}
      {/* <FavoriteColor/> */}
      {/* <Bike/> */}
      {/* <List/> */}
      {/* <Timer/> */}
      {/* <MyForm/> */}
      {/* <MyForm2/> */}
{/* 
      <Home/>
      <About/>
      <Contact/> */}

        
        <BrowserRouter>
        <ul>
          <li> <Link to='/' >Home</Link> </li>
          <li> <Link to='/about' >About</Link> </li>
          <li> <Link to='/contact-us' >Contact us</Link> </li>
        </ul>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
