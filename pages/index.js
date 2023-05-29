
import { Inter } from 'next/font/google';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {theme, setTheme} = useTheme();

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <main className='py-32'>

      <span>

        <span onClick={()=>setTheme("light")} >Light</span>| {" "}
        <span onClick={()=>setTheme("dark")} >Dark</span>| ({theme})
      </span>

        <h2  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-3xl"> Animation Zoom in </h2>
        <h2  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-3xl"> Fade Right </h2>
        <h2  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-3xl"> Fade Left </h2>
        <h2 data-aos="fade-down-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-5xl"> Fade left up</h2>
    </main>
  )
}
