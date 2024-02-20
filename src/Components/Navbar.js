import React ,{useState} from "react";
import "../App.css";
import toggleMode from '../../src/App'
import {
  BrowserRouter as Router,

  Link,
} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand "  >{props.title}</a> */}
        <Link to="/b"   className="navbar-brand ">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 style={{color:black}}'>
            <li className="nav-item">
               {/* //<a  to="/a"className="navbar-brand " >Home</a>  */}
              <Link to="/a"  className="navbar-brand " >About Us</Link>
            </li>
            <li className="nav-item">
              <a className=" title navbar-brand" >{props.About}</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}` }>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
          
        </div>
        
      </div>
      
    </nav>

    
  );
}
