import React from 'react';
import ProductImg1 from "../images/image-product-1.jpg";
import ProductImg2 from "../images/image-product-2.jpg";
import ProductImg3 from "../images/image-product-3.jpg";
import ProductImg4 from "../images/image-product-4.jpg";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// const carouselStyle={
    
// }

const slideImage = () => {
  const circle={
    borderRadius:"50%"
  }
  
  return (
    <div id="carouselExampleControls" className="carousel slide m-auto" style={{
      height:"19rem",
      maxWidth:"400px"
    }}  data-bs-ride="carousel">
    <div className="carousel-inner  " style={{height:"100%"}}>
      <div className="carousel-item active   " >
        <img src={ProductImg1} className="d-block  w-100 h-auto"   alt="..."/>
      </div>
      <div className="carousel-item  ">
        <img src={ProductImg2} className="d-block  w-100 h-auto"  alt="..."/>
      </div>
      <div className="carousel-item  ">
        <img src={ProductImg3} className="d-block  w-100 h-auto"  alt="..."/>
      </div>h-70
      <div className="carousel-item  ">
        <img src={ProductImg4} className="d-block  w-100 h-auto "  alt="..."/>
      </div>
    <button className="carousel-control-prev   "  style={{opacity:"1" , filter:"none"}}  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="white-back black  px-1 py-1" style={circle} >{<NavigateBeforeIcon/>}</span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next   " style={{opacity:"1" , filter:"none"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="white-back black  px-1 py-1" style={circle} >{<NavigateNextIcon/>}</span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>
  </div>
  )
}

export default slideImage;