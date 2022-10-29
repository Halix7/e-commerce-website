import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const ImageCascade = ({productImg}) => {
  return (
    <div className='sideImg'>
    <img src={productImg} alt="mainHead" />
    <button className="carousel-control-prev   "  style={{opacity:"1" , filter:"none"}}  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span className="white-back black  px-1 py-1" style={{borderRadius:"50%"}} >{<NavigateBeforeIcon/>}</span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next   " style={{opacity:"1" , filter:"none"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span className="white-back black  px-1 py-1" style={{borderRadius:"50%"}} >{<NavigateNextIcon/>}</span>
  <span className="visually-hidden">Next</span>
</button>
    </div>
  )
}

export default ImageCascade