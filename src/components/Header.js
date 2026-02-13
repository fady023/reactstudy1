import React from 'react'
import Navbar from './Navbar'

const Header = () => {
   const links = [{title:"Home",url:"/"},{title:"About",url:"/about"}
    ,{title:"Contact",url:"/contact"},{title:"Blog",url:"/blog"}]

  return (
    <>
      <Navbar mylinks={links}/>
    </>
  )
}

export default Header
