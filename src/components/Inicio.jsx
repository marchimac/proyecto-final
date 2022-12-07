import React from 'react'
import Recetas from './components/Recetas';
import { useLocation, useRoutes } from 'react-router-dom'

export default function Inicio() {

  const location = useLocation();
  console.log(location);

  let element = useRoutes([
    {
      path: '/',
      element: <Inicio />
    },
    {
      path: '/recetas',
      element: <Recetas />
    }
  ])

  return (
    <>
    <div>Inicio</div>
    {element}
    </>
  )
}
