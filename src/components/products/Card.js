import React from 'react'
import { Fragment } from 'react'    
   

const card = ({mydata}) => {
    return (
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",border:"1px solid black",padding:"10px",margin:"10px",width:"30%"     }}>
            <h2>{mydata.title}</h2>
            <p>{mydata.desc}</p>
            <span style={{ color: "blue", fontWeight: "bold" }}>{mydata.price}</span>
            <h4>{mydata.rate}</h4>
        </div>
    )
}

export default card
