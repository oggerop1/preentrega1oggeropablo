import img from './assets/logopuma2.png';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='NavBar'>
        <link to='/'>
          <h3> Pluma Ecommerce</h3>
        </link>
        <div className='categorias'>
          <NavLink to={`/categoria/Hombres`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}>Hombres</NavLink> 
          <NavLink to={`/categoria/mujeres`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}>Mujeres</NavLink> 
          <NavLink to={`/categoria/niños`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'} >Niños</NavLink>
        </div>
      </nav>
      <CartWidget/>
    </>
 
  );
}

export default NavBar;
