import React from "react";
import "../style/section.scss";
import { delay, motion,transform,useScroll } from "framer-motion";



export default function Section({

  heading,
  text,
  ActiveBtn = true,
  btu,
  bgcolor,
  textcolor,
  image,
  ptext,
  buttonbg,
  Activecolor = true,
  buttoncolor,
  Heightactive= true,
  customheight,
  customwidth,
}) {


  const headingAnime ={
    initial:{
      y:"-100%",
      opacity:0,
    },
    whileInView:{y:"0",
      opacity:1,
    }
  } 

  const textanime ={
    ...headingAnime,
    transition:{
      delay:0.5,
    }
  }

    const btuanime ={
      initial:{
        y:"100%",
        opacity:0,
      },
      whileInView:{y:"0",
        opacity:1,
      },
      transition:{
        delay:0.5,
      }
    } 

    const imganime = {
      initial: {
        scale:0.2,
        opacity:0,
        x:50,
        y:50,
        transform:"rotate(45deg)"
      },
      whileInView:{
        scale:1,
        opacity:1,
        x:0,
        y:0,
        transform: "rotate(0deg)",
      },
      transition:{
        delay:0.5,
      }

    }
  
  return (
    <section
      style={{
        backgroundColor: bgcolor,
      }}
      
      className={`w-full h-full xl:pt-[15rem] py-[2rem] px-[2rem] xl:pb-[2rem] flex justify-center items-center flex-col bg-[${bgcolor}] `}
    >
      <div className=" xl:w-[50%] text-center">
        <motion.h1
          {...headingAnime}
          style={{
            color: textcolor,
          }}
          className={`text-[${textcolor}]`}
        >
          {heading}
        </motion.h1>
        <motion.p
         {...textanime}
          style={{
            color: `${Activecolor?textcolor:ptext}`,
          }}
          className=""
        >
          {text}
        </motion.p>
        {ActiveBtn ? (
          <motion.button
           {...btuanime}
            style={{
              backgroundColor: `${Activecolor?textcolor:buttonbg}` ,
              color: `${Activecolor?bgcolor:buttoncolor}`,
            }}
          >
            {btu}
          </motion.button>
        ) : (
          ""
        )}
        <motion.img 
        {...imganime}
        style={{
          height:`${Heightactive?"70%":customheight}`,
          width:`${Heightactive?"445px":customwidth}`,
        }} src={image} className={` object-cover`}alt="" />
      </div>
    </section>
  );
}
