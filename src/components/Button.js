import React from 'react'

const Button = ({text,click,children}) => {
  return (
    <div>
            <button style={{backgroundColor:"black",color:"white"}} onClick={click}>{children || text}</button>
      
    </div>
  )
}

export default Button
