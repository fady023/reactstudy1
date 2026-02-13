import React, { Fragment } from 'react'
import Card from './Card.js'

const Products = ({ data }) => {

    return (
        <div style={{display:"flex"}}>
            {
                data.map((x,id) => {


                    return (
                        <Card mydata ={x} key={id}/>
                    )

                })
            }

        </div>
    )



}

export default Products
