// import { Route, Routes, Link, NavLink, useLocation, useRoutes } from 'react-router-dom'       /* ************ */
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import FormComp from './components/FormComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Informacion from './pages/Informacion';
import ShowResult from './components/ShowResult';
// import Recetas from './pages/Recetas';
// import Informacion from './pages/Informacion';
// import NotFound from './components/NotFound';
// import Api from './components/Api'

function App() {
  // const location = useLocation()    /* **************** */
  // console.log(location);        /* ***************** */

  // let element = useRoutes([     /* ****** DESDE ****** */
  //   {
  //     path: '/recetas',
  //     element: <Recetas />
  //   },
  //   {
  //     path: '/informacion',
  //     element: <Informacion />
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />
  //   }
  // ])                        /* ******* HASTA ******** */

  return (
    <>
      <HeaderComp />
      <NavbarComp />
      {/* {element} */}
      <Informacion />
      <FormComp />
      <ShowResult />
      {/* <Api /> */}
      <FooterComp />
    </>
  )
}

export default App;
