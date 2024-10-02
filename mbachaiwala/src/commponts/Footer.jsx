import React, { useState } from 'react'
import '../style/footer.scss'

export default function Footer({bgcolor,textcolor}) {
    let links =["home","story","media","franchise","events","chai wala cares"]
    let time = new Date().getFullYear();
    let [activeIndex, setActiveIndex] = useState(0)
  //aside a tag mouseenter active a tag opacity 1 and all the other a tag opactiy 0.3?

  return (
    <footer style={{
        backgroundColor:bgcolor,
        color:textcolor,
    }} className='h-[100vh] fixed bottom-0 w-full xl:py-[15rem] z-[-1]'>

        <div  className=" flex justify-between flex-wrap xl:px-[10rem]">
            <h1 style={{lineHeight:1.1,
                fontStyle:"italic",
            }} className='text-[4rem] font-bold inline-block'>Let's <br />#ConnectOnCutting?</h1>

            <aside style={{
                width:"fit-content"
            }} className='flex flex-col inline-block'>
                {
                    links.map((v,i)=>{
                        return(
                                <a key={i}  href="#" className={`uppercase inline-block curser-pointer`} style={{
                                    opacity: activeIndex == i ? 1 : 0.3,
                                }} onMouseEnter={()=>{setActiveIndex(i)}} onMouseLeave={()=>{setActiveIndex(activeIndex)}}>{v}</a>
                        )
                    })

                }
            </aside>
          </div>
            

     <div className="contact flex py-[5rem] justify-between pb-[20rem] px-[13rem]">
                <div className='flex flex-col'>
                <h2 className='text-[2rem] font-normal'>Email</h2>
                <a href="mail:Info@mbachaiwala.com" className='text-xl'>Info@mbachaiwala.com</a>
                <a href="mail:franchise@mbachiwala.com" className='text-xl'>franchise@mbachiwala.com</a>

                </div>

                <div className='text-right'>
                    <h2 className='text-[2rem] font-normal'>Phone</h2>
                    <a href="tel:+91722905222" className='text-xl'>+91722905222</a>
                </div>
     </div>

            <div className="copy w-full text-center">
                <p>© COPYRIGHT {time} MBA CHAIWALA. MADE BY</p>
            </div>

    </footer>
  )
}
