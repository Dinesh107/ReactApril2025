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
import User from './components/User'
import OldBooks from './components/OldBooks'
import NewBooks from './components/NewBooks'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'



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
          <li> <Link to='/user/2' >User 2</Link> </li>
          <li> <Link to='/user/3' >User 3</Link> </li>
          <li> <Link to='/books/old_books' >Old Books</Link> </li>
          <li> <Link to='/books/new_books' >New Books</Link> </li>
          <li> <Link to='/login' >Login</Link> </li>
        </ul>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/user/:id' element={<User/>}/>
            <Route path='/books'>
               <Route path='old_books' element={<OldBooks/>}/>
               <Route path='new_books' element={<NewBooks/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<EmployeeDashboard/>}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App


