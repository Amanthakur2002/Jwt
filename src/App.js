import React from 'react'
import { Route, Routes }from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'


export default function App(){
  return(
<>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
 </>
  )
}


