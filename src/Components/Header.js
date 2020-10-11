import React from 'react';
import {Link} from 'react-router-dom';
//inline CSS styles with js_object

const styles={
    backgroundColor:'#b3463e',
    borderBottom:'0.5px white solid', 
    borderTop:'0.5px white solid'
}


const Header=()=>{
            return(<>
            
<nav className="navbar navbar-expand-lg"style={ styles } >
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase mx-2 active" to="/home">Kasoju Mamatha</Link>
      </li>
      <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase mx-2 active" to="/profile">PROFILE</Link>
      </li>
      <li className="nav-item">
            <Link className="nav-link text-white text-uppercase mx-2" to="/about">ABOUT</Link>
      </li>

      <li className="nav-item">
            <Link className="nav-link text-white text-uppercase mx-2" to="/contact">CONTACT</Link>
      </li>
      
      
       
      

    </ul>
  </div>
</nav>
            
                  </>)



}
export default Header;