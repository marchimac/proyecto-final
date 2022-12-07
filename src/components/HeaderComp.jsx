import logo from '../images/cutlery.png'
const styles = {
  imgLogo: {
    width: '10%'
  }
}

function HeaderComp() {
  return (
    <>
    <div className='d-flex m-3'>
      <img className='m-2' src={logo} style={styles.imgLogo} alt='' />
      <h1 className='m-auto' >Fernando Martínez Sánchez</h1>
    </div>
    </>
  );
}

export default HeaderComp;