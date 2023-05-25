import img from './assets/logopuma2.png';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='NavBar'>
        <Link to='/'>
          <h3> Pluma Ecommerce</h3>
        </Link>
        <div className='categorias'>
          <NavLink to={`/categoria/hombres`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}>Hombres</NavLink> 
          <NavLink to={`/categoria/mujeres`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}>Mujeres</NavLink> 
          <NavLink to={`/categoria/niños`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'} >Niños</NavLink>
        </div>
      </nav>
      <CartWidget/>
    </>
 
  );
}

export default NavBar;
