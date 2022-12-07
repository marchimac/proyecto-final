// import { Route, Routes, Link, NavLink, useLocation, useRoutes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import FormComp from './components/FormComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Api from './components/Api'
// import Inicio from './components/Inicio';
// import Recetas from './components/Recetas';

function App() {
  // const location = useLocation();
  // console.log(location);

  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Inicio />
  //   },
  //   {
  //     path: '/recetas',
  //     element: <Recetas />
  //   }
  // ])
  return (
    <>
    <div className="App">
      <HeaderComp />
      <NavbarComp />
      <FormComp />
      <Api />
      <FooterComp />
    </div>
    </>
    
  );
}

export default App;
