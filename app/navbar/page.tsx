import Link from 'next/link';
import "../navbar/navbar.css";
import '../styles/styles.css';
import headbackground from '../assets/images/bgimage.png';
function Navbar() {
  return (
    <div style={{backgroundImage:`url(${headbackground.src})`, width:'100%', 
    height:'500px', backgroundRepeat:'no-repeat', 
     backgroundSize: 'cover', backgroundColor:'rgba(0, 0, 0, 0.390)',  
      backgroundBlendMode: 'overlay', borderRadius: '0px 0px 150px 150px', 
    }}>
    <div className='navBar'>
<h1 className='logo'>Dave's Designer Depo</h1>
<ul className='navLinks'>
  <Link href='/home'><li>Home</li></Link>
    <Link href='/shop'><li>Shop</li></Link>
    <Link href='/cart'><li>Cart</li></Link>
    <Link href='/login'> <li>Login</li></Link>
    <Link href='/contact'> <li>Contact</li></Link>
   
</ul>
   
    </div>
    <div className='headText'>
    <h2 className='text-6xl text-orange-500 m-6' m-3>This is the Head</h2>
    <p className='m-8 text-white text-2xl' >Hello from head</p>
    <button>Shop Now</button>
    </div>
    
    </div>
  )
}

export default Navbar