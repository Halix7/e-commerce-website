import React from 'react'
// import mainStyle from './mainStyles';
// import Button from '@mui/material/Button';
import SlideImage from './slideImage';
import Discription from './Discription';
import Showcase from "./showcase"
const Main = (props) => {
  
  
  return (
    <>
    <div className='container px-0 '  id="home" style={{borderTop:"1px" , borderTopColor: "hsl(220, 14%, 75%)" ,borderTopStyle:"solid"}}>
      
      <div className='row d-flex justify-content-center  ' >
        <div className='col-md-6 screenMain' onResize>
          
          <div className='screenBig'>

            <Showcase setScreenChange={props.setScreenChange} screenChange={props.screenChange}/>
          </div>
          <div className=' screenSmall'>
            <SlideImage/>
          </div>
          
          
          
            
          
         
     
        </div>
        <div className='col-md-6 d-flex align-items-md-end' style={{maxWidth:"30rem"}}>
          <Discription isAdded={props.isAdded} setIsAdded={props.setIsAdded} />
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Main