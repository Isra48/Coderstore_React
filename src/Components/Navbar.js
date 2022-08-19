import './Navbar.css';
import Hamburguer from '../Assets/menu_icon.png'




function Navbar() {
  return (
    <div className='Navbar' >
    <h2> Titulo</h2>
   <p> Sudaderas</p>
   <p> Palyeras</p>
   <p> Gorras</p>
   <img className='menu_icon' src={Hamburguer} alt='menu_icon'></img>
    
     
    
     
    </div>
  );
}

export default Navbar;
