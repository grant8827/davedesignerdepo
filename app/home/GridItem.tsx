"use client"
import Image from 'next/image';
import React from 'react'
import image1 from '../assets/images/men-shose.png';
function GridItem() {
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'200px', height:'auto',margin:'10px', padding:'10px',borderRadius:'10px',backgroundColor:'white', boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
      <Image src={image1}  
                    alt="GFG logo imported from public directory" /> 
        <h4>Men Shose</h4>
        <button>Show Now</button>
        
      </div>
      <div style={{width:'200px', height:'auto', margin:'10px', padding:'10px',borderRadius:'10px',backgroundColor:'white', boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
      <Image src={image1}  
                    alt="GFG logo imported from public directory" /> 
        <h4>Men Shose</h4>
        <button>Show Now</button>
        
      </div>
    </div>
  )
}

export default GridItem
