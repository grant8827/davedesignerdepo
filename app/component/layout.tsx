import React from 'react'
import Navbar from '../navbar/page'
interface props{
    children: JSX.Element
}
function Layout({children} :props) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>  
        
</div>
  )
}

export default Layout