import React, { useState } from 'react';
import CartImg from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import MenuIcon from '@mui/icons-material/Menu';
import Cart from './Cart';
import "./main.css"
const avatarStyle={
  width:"2.5rem",
  height:"auto",
  cursor:"pointer"
}


const Navbar = ({isAdded,setIsAdded}) => {
  const [cartClick,setCartClick]=useState(false);
  function handleCartClick(){
    setCartClick(prev=>{
      if(prev === false){
        return true;
      }else{
        return false
      }
    })
  }
  const counter={
    position:"relative",
    top:"-13px",
    left:"-42px",
    zIndex:"2",
    paddingInline:"10px",
    margin:"10px 2px",
    fontSize:".8rem"
  }
  
  
  return (
    <>
    <nav className="navbar navbar-white navbar-expand-md bg-white  p-0 my-3 ">
  <div className="container-sm  ">
    <div >
    <button className="navbar-toggler p-0 border-0 shadow-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{width:"1rem"}}>{<MenuIcon/>}</span>
    </button>
    <a className="navbar-brand p-0 m-0 fw-bold f-family ms-2 fs-1 my-auto " href="/">sneakers</a>
    </div>
    
    <div className="offcanvas offcanvas-start text-bg-white  " style={{width:"60%"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasDarkNavbar" >
      <div className="offcanvas-header">
        <button type="button" className=" btn-close btn-small btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       
      </div>
      
      <div className="offcanvas-body ms-5">
        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 hoverStyle nav-pills gap-3 " role="tablist"  >
          <li className="nav-item  position-relative " role="presentation">
            <a className="nav-link "  href="#home" data-bs-toggle="pill"   role="tab" aria-selected="true" >Collections</a>
          </li>
          <li className="nav-item position-relative " role="presentation">
            <a className="nav-link" href="#home"  data-bs-toggle="pill"   role="tab" aria-selected="false">Men</a>
          </li>
          <li className="nav-item position-relative" role="presentation">
            <a className="nav-link" href="#home"  data-bs-toggle="pill"   role="tab" aria-selected="false">Women</a>
          </li>
          <li className="nav-item position-relative" role="presentation" >
            <a className="nav-link" href="#home"  data-bs-toggle="pill"  role="tab" aria-selected="false"> About</a>
          </li>
          <li className="nav-item position-relative" role="presentation">
            <a className="nav-link" href="#home"  data-bs-toggle="pill"   role="tab" aria-selected="false">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div className='d-flex justify-content-end align-self-center overeffect' >
      

      <img src={CartImg} onClick={handleCartClick} width="25rem" height="auto" className='my-auto me-4' style={{cursor:"pointer",opacity:"0.9"}} alt="cart" />
      {isAdded.counts > 0 && isAdded.val === true ? <span className='white orange-back  rounded-4' style={counter}>{isAdded.counts}</span> : ""}
      <img src={Avatar}  style={avatarStyle} alt="avatar"/>
    </div>
  
  </div>
  </nav>
  {
    cartClick && <Cart setIsAdded={setIsAdded} isAdded={isAdded} />
    }
</>
  );
}

export default Navbar;