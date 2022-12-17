import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Recetas from '../pages/Recetas'
import Informacion from '../pages/Informacion'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/recetas' element={<Recetas />} />
        <Route path='/informacion' element={<Informacion />} />
        <Route path='*' element={ <Navigate replace to='/' /> } />
    </Routes>
  )
}
