import React from 'react'
import './nav.css';
import navstyle from './nav.module.css'

const Navbar = ({mylinks}) => {
   
  return (
    <nav className={navstyle.navbar}>

        <a href=''>Logo</a>
        <ul>
            {mylinks.map((link,index)=>{
                return (<li key={index}>
                    <a href={link.url}>{link.title}</a>
                </li>)
            })}
           
        </ul>
      
    </nav>
  )
}

export default Navbar
