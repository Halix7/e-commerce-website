import React from "react";

import { BrowserRouter, Routes, Route, NavLink,Navigate  } from "react-router-dom";
import ProductImg1 from "../images/image-product-1.jpg";
import ProductImg2 from "../images/image-product-2.jpg";
import ProductImg3 from "../images/image-product-3.jpg";
import ProductImg4 from "../images/image-product-4.jpg";
import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg";

import Image from "./Image";
const Showcase = ({ screenChange,setScreenChange}) => {

  return (
    <BrowserRouter>
    
    <div className={ "imgDesign d-flex flex-column justify-content-center align-content-center gap-4"}>
      
      <div id="imageOnSlide" className="product">
      <Routes >
                    <Route  exact default path="/1" element={
                     <Image productImg={ProductImg1} screenChange={screenChange} setScreenChange={setScreenChange} />
                     } />
                    <Route exact path="/2" element={ <Image productImg={ProductImg2} screenChange={screenChange} setScreenChange={setScreenChange} /> } />
                    <Route exact path="/3" element={<Image productImg={ProductImg3} screenChange={screenChange} setScreenChange={setScreenChange} /> } />
                    <Route exact path="/4" element={<Image productImg={ProductImg4} screenChange={screenChange} setScreenChange={setScreenChange} />  } />
                    <Route path="*" element={<Navigate to="/1" />}/>
                </Routes>
       
      </div>
      <div className="thumb d-flex   gap-4  hovering">
        <NavLink  to="/1"   className="nav-hover"
        style={({ isActive }) => ({ 
          opacity: isActive ? "0.5":"1",
          border:isActive? "2px solid hsl(26, 100%, 55%)":"none",
          borderRadius:"14px"
        })}>
          <img src={Thumbnail1} alt="thumb" />
        </NavLink>
        <NavLink to="/2"  className="nav-hover"
        style={({ isActive }) => ({ 
          opacity: isActive ? "0.5":"1",
          border:isActive? "2px solid hsl(26, 100%, 55%)":"none",
          borderRadius:"14px",
          
        })}
        >
          <img src={Thumbnail2} alt="thumb" />
        </NavLink>
        <NavLink to="/3" className="nav-hover"
        style={({ isActive }) => ({ 
          opacity: isActive ? "0.5":"1",
          border:isActive? "2px solid hsl(26, 100%, 55%)":"none",
          borderRadius:"14px"
        })}
        >
          <img src={Thumbnail3} alt="thumb" />
        </NavLink>
        <NavLink to="/4" className="nav-hover"
        style={({ isActive }) => ({ 
          opacity: isActive ? "0.5":"1",
          border:isActive? "2px solid hsl(26, 100%, 55%)":"none",
          borderRadius:"14px"
        })}
        >
          <img src={Thumbnail4} alt="thumb" />
        </NavLink>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default Showcase;
