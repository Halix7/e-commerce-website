import React,{useState} from 'react'
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import CartImg from "../images/icon-cart.svg"
const Discription = (props) => {
    const [valCollector,setValCollector]=useState(0);;
    
    function handleAddCartBtn(){

        props.setIsAdded(()=>{
            return {counts: valCollector ,val: !props.isAdded.val}
        })
    }
  return (
    <div className=' mx-4 d-flex flex-column justify-content-center gap-2 mb-5'>
        <h6 className='orange fw-bold mt-4 ' style={{
            fontSize:".75rem",
            letterSpacing:".075rem",
            lineHeight:".5rem"
        }}>SNEAKER COMPANY</h6>
        <h1 className='fw-bold'>Fall Limited Edition <br /> Sneakers </h1>
        <p className='p-size weight-400 Dark-grayish-blue lh-sm'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='row row-cols-md-1 d-flex align-items-center justify-content-end w-100  f-family'>
            <div className=' col d-flex gap-2'>

                <h2 className='fw-bold m-0 '>$125.00</h2>
                <span className='my-auto pale-orange-back orange weight-700 px-2 rounded-3'>50%</span>
            </div>
            
            
            <div className=' col my-auto '>
                <h6 className='text-decoration-line-through  Grayish-blue '>$250.00</h6>
            </div>
        </div>
        <div className='row d-flex gap-3'>

        <div className='col-sm-4  d-flex  justify-content-between white-back px-4 py-2 rounded-3' >
            <img className='my-auto' style={{
                cursor:"pointer"
            }} src={Minus} alt="minus" onClick={()=>{
                setValCollector(prev =>{
                    return prev - 1; 
                });
            }} />
            <h6 className='my-auto'>
                {valCollector}
            </h6>
            <img className='my-auto' style={{
                cursor:"pointer"
            }} src={Plus} alt="plus"  onClick={()=>{
               setValCollector(prev =>{
                return prev + 1; 
            });
            }} />
        </div>
        <button onClick={handleAddCartBtn} className=' col-sm-7 py-3 rounded-3 border-0 orange-back white weight-700 d-flex gap-3 align-items-center justify-content-center btn-cursor ' 
        style={{
            boxShadow:"1px 10px 30px -9px   hsl(26, 100%, 55%)",
            cursor:"pointer"
           }}
        >
           <img className='me-2 my-auto '  width="15rem" height="15rem" style={{
            filter:  "brightness(0) invert(1)"
        }} src={CartImg} alt="cart..." />
            Add to cart 
        </button>
        </div>
    </div>
  )
}

export default Discription