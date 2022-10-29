import React,{useState} from 'react';
import './App.css';
import Navbar from "./compnents/Navbar";
import Main from "./compnents/Main";
import Showcase from './compnents/showcase'; 
import Prev from "./images/icon-previous.svg"
import Next from "./images/icon-next.svg"
import Close from "./images/icon-close.svg";
function App() {
  const [screenChange,setScreenChange]=useState(false);
  const [isAdded,setIsAdded]=useState({counts:0,val:false});


 
  return (
    <>
    <div>

  

   {screenChange &&
  

    <div className='imgLayout'>
<img onClick={()=>{
  setScreenChange(false)
}} className="closeImg" src={Close} alt="cross" style={{
            filter:  "brightness(0) invert(1)"
        }}/>
       
       <button className=" rounded-circle  "  style={{opacity:"1" , filter:"none",width:"35px",height:"35px"}}  type="button" >
<span className="white-back black  px-1 py-1" style={{borderRadius:"50%"}} ><img    src={Prev} alt="next" /></span>
  <span className="visually-hidden">Previous</span>
</button>
    
   
      <Showcase/>
<button className="rounded-circle  " style={{opacity:"1" , filter:"none",width:"35px",height:"35px"}} type="button"   data-bs-slide="next">
<span className="white-back black  px-1 py-1" style={{borderRadius:"50%"}} ><img   src={Next} alt="next" /></span>
  <span className="visually-hidden">Next</span>
</button>
   
   </div>
}
   
   <Navbar isAdded={isAdded} setIsAdded={setIsAdded}/>
   <Main screenChange={screenChange} setScreenChange={setScreenChange} isAdded={isAdded} setIsAdded={setIsAdded}/>
    </div>
    </>
  );
}

export default App;
