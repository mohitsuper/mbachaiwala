import React from 'react'
import Herovideo from './commponts/Herovideo'
import Section from './commponts/Section'
import data from './data/data.json'
import './style/App.scss'
import Footer from './commponts/Footer'
import Misliner from './commponts/Misliner'
import { motion,useScroll } from 'framer-motion'


export default function App() {
  let {freshTopic,freshTopic2,tedTalks,courses,chaiwala,map,album,franchise,barat} = data
  let yellow="#F7E10A";
  let pink="#E62E78",white="#fff",brown = "#803415";

  

  const { scrollYProgress } = useScroll();

  return (
    <div className=' '>
      <Misliner/>
      <Herovideo/>
      <Section  text={freshTopic.text} heading={freshTopic.heading} btu={freshTopic.btn} textcolor={yellow} bgcolor={pink} image={"./asstes/images/academy.png"} />

      <Section text={freshTopic2.text} heading={freshTopic2.heading} btu={freshTopic2.btn} textcolor={yellow} bgcolor={pink} image={"./asstes/images/story.png"} />

      <Section text={tedTalks.text} heading={tedTalks.heading} btu={tedTalks.btn} textcolor={pink} bgcolor={yellow} image={"./asstes/images/in-the-news.gif"} />

      <Section text={franchise.text} heading={franchise.heading} btu={franchise.btn} textcolor={pink} bgcolor={white} image={"./asstes/images/franchise.gif"} buttoncolor={yellow} Activecolor={false} ptext={brown} buttonbg={brown}/>

      <Section text={map.text} heading={map.heading} ActiveBtn={false} textcolor={yellow} bgcolor={pink} image={"./asstes/images/locations.png"} />

      <Section text={courses.text} heading={courses.heading} btu={courses.btn} textcolor={pink} Heightactive={false} customheight={"30%"} customwidth={"300px"} bgcolor={yellow} image={"./asstes/images/image2.png"} />

      <Section text={album.text} heading={album.heading} btu={album.btn} textcolor={pink} bgcolor={white} image={"./asstes/images/mba-cares.gif"} customwidth={"80%"} Heightactive={false} buttoncolor={yellow} Activecolor={false} ptext={brown} buttonbg={brown}/>

      <Section text={barat.text} heading={barat.heading} btu={barat.btn}  bgcolor={pink} textcolor={yellow} image={"./asstes/images/image1.png"} />

      <Section text={chaiwala.text} heading={chaiwala.heading} btu={chaiwala.btn} textcolor={pink} bgcolor={white} image={"./asstes/images/image3.png"} buttoncolor={yellow} Activecolor={false} ptext={brown} buttonbg={brown}/>

      <div style={{
        backgroundColor:"transprent",
        zIndex:-2,
        position:"absolute",
      }} className='w-full h-[100vh]'></div>

      <Footer bgcolor={yellow} textcolor={pink}/>

    </div>
  )
}
