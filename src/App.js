import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp';
import FormComp from './components/FormComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp'

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <NavbarComp />
      <FormComp />
      <FooterComp />
    </div>
  );
}

export default App;
