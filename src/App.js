import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import FormComp from './components/FormComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Api from './components/Api'

function App() {
  return (
    <>
      <HeaderComp />
        <NavbarComp />
        <FormComp />
        <Api />
        <FooterComp />
    </>
  );
}

export default App;
