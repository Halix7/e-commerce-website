import React from 'react'

const Image = ({screenChange,productImg,setScreenChange}) => {
  function handleClick(){
    setScreenChange(true)
    console.log("clicked")
    console.log(screenChange)
  }
  return (
    <div>
      
      <img onClick={handleClick} src={productImg} alt="mainHead" />
      
        

    </div>
      
  )
}

export default Image