import React, { useEffect, useState } from 'react'
import '../style/mis.scss'
import { BsMouse } from "react-icons/bs";
import {motion} from 'framer-motion'

export default function Misliner() {
  let [position,setPostion] = useState({
    x:0,
    y:0,
    opactiy:1,
    s:1,
  })
  useEffect(()=>{
   let mouse =  document.querySelector(".moving-mouse");
   let btu = document.querySelector(".btu")
   
   document.addEventListener("mousemove",(val)=>{
       setPostion({x:val.x-10,y:val.y-10})
   })
   
   document.addEventListener("mouseenter",()=>{
    setPostion({opactiy:1,})
   })
   document.addEventListener("mouseleave",()=>{
    setPostion({opactiy:0,})
   })

   btu.addEventListener("mouseenter",()=>{
      setPostion({s:10,})
   })
   btu.addEventListener("mouseleave",()=>{
    setPostion({s:1,})
   })
   
  },[])

  console.log(position.s)

  return (

    <>
    <div style={{
          top:position.y,
          left:position.x,
          opacity:position.opactiy,
          zIndex:100,
          transform: `scale(${position.s})`
        }} className="moving-mouse fixed h-[2rem] w-[2rem] border-[.2rem] border-red-500 rounded-full"></div>
    <div className=''>

        <nav  className='fixed w-full  px-[4vw] py-[2rem]'>
            <div className="logo h-[13vh] ">
                <img src="/asstes/images/logo (1).png" className='w-full h-full object-cover' alt="" />
            </div>
        </nav>
        <button className='btu '>get a Franchises</button>
 
        <BsMouse className="mouse text-[5rem] text-white "/>
         

    </div>
    </>
  )
}
