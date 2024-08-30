import React from 'react'
import { Link } from 'react-router-dom';

const NavBar=(props)=> {

    return (
      <div>
        <nav className={`navbar-expand-lg navbar-${props.mode} bg-${props.mode} d-flex align-items-center`}>
  <Link className="navbar-brand mx-4" to="/">NewsMonkey</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content: space-between" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Genral</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/bussiness">Bussiness</Link>
      </li>
    </ul>
  </div>
     <div className="form-check form-switch mx-5">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault"style={{color:props.mode==='dark'?'white':'black'}}>{props.labletext}</label>
     </div>
</nav>
   </div>
    )
  
}

export default NavBar
