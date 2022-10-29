import React from 'react';
import Box from '@mui/material/Box';
import ImgThumb from "../images/image-product-1-thumbnail.jpg"
import DeleteIcon from "../images/icon-delete.svg"
const Cart = ({isAdded,setIsAdded}) => {
  function handleDelete(){
    setIsAdded(
       {counts:0,val:false}
    )
  }
  return (
    <div className='container-sm d-flex justify-content-end '>
    <Box  sx={{
        width:"95%",

        height:"50%",
        maxHeight:250,
        position:'absolute',
        zIndex:100,
        backgroundColor:"white",
        mt:".5rem",
        maxWidth:390,
        borderRadius:3,
        top:80,
        boxShadow:"-3px 9px 35px -14px black "
       
        
    }}>
        <h5 className='p-4' style={{
          borderBottom:"1px solid hsl(221, 20%, 84%)"
        }}>Cart</h5>
        <div className='d-flex justify-content-center'>
            
            {
            isAdded.counts <= 0  ?  <p className='Dark-grayish-blue weight-700 ' >Your cart is empty.</p>:
            <div className='overflow-hidden d-flex flex-column gap-2  my-4' >

            <div className='d-flex ' style={{
              color:"rgba(0,0,0,0.55)"
            }}>

              <img src={ImgThumb} className="ms-1 rounded-3 "  style={{
                width:"3.5rem",
                height:"3.5rem",
                
              }} alt="thumb" />
              <div className='mx-4' style={{
                lineHeight:"1"
              }}>
                <p>Autumn Limited Edition...</p>
                <p>$125 x {isAdded.counts} <span className='fw-bold'>${125 * isAdded.counts}</span></p>
              </div>
              <img src={DeleteIcon} onClick={handleDelete} style={{
                width:"1.2rem",
                height:"1.2rem",
                margin:"auto 1px"
              }}alt="delete" />

            </div>
            <button className=' py-2 border-0  orange-back white rounded-3'>Checkout</button>
            </div>
            
            
            } 

            
        </div>
    </Box>
    </div>
  )
}

export default Cart