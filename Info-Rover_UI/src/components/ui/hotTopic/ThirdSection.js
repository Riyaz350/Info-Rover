"use client"
import { FaRegNewspaper } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion"
import newsCol from '../../../../public/news.json'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ThirdSection = () => {
  const [width1024, setWidth1024] = useState(false)
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            if(window.innerWidth == 1024){
                setWidth1024(true)
                
            }
        }
    },[])
  const uniqueCategories = [...new Set(newsCol.map(news => news.category))];
  const social =[
    {
      media:'Twitter',
      url:'Follow',
      icon:<BsTwitterX />,
      color:'black'
    },
    {
      media:'LinkedIn',
      url:'Follow',
      icon:<FaLinkedinIn />,
      color:'blue-500'
    },
    {
      media:'Facebook',
      url:'Like',
      icon:<FaFacebookF />,
      color:'blue-700'
    },
    {
      media:'Pinterest',
      url:'Follow',
      icon:<FaPinterest />,
      color:'red-500'

    }
  ]
  return (
    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto ">

          {/* newses */}
          <div className="col-span-3 h-full">
          {uniqueCategories.map((category, index) => (
    <div key={index}>
      <h1 className="text-3xl">{category}</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newsCol
        .filter(news => news.category === category)
        .map((news, newsIndex) => (
          <div key={newsIndex}>
            <SwiperSlide>
              <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:1, delay:0.05*index}} className="mx-10 md:mx-0 relative border-2 md:h-[200px] overflow-scroll md:overflow-hidden">
                <img className=" w-full h-[200px]  md:h-[150px]" src="https://i.ibb.co/1QSpnhT/20216.jpg"/>
                <h1 className="text-xs my-2 font-bold pl-2">{news.title}</h1>
                {/* <motion.div initial={{y:100}} whileHover={{y:0}} transition={{duration:.1}} className="p-2 absolute text-white bg-black h-full w-full bg-opacity-30 space-y-2 top-0 left-0">
                <h1>{news.content.slice(0,50)+'...'}</h1>
                </motion.div> */}
              </motion.div>
            </SwiperSlide>
          </div>
        ))}
        
      </Swiper>
      
    </div>
  ))}
          </div>

          {/* contacts */}
          <div className="col-span-1 p-2 space-y-2 flex flex-col ">

            <div className=" border-4 p-5 text-center border-[#F84E45] flex flex-col gap-2 items-center">
            <h1 className="text-5xl bg-gray-100 w-fit p-5 rounded-full text-[#F84E45]"><FaRegNewspaper /></h1>
                <h1 className="text-3xl">Subscribe to our Newsletter</h1>
                <h1 className="text-lg ">Get the latest and the freshest news of the day through your Email</h1>
                <input type="text"  placeholder="Your Email" className="bg-gray-200 text-black p-1 rounded-lg w-full h-[40px]"/>
                <button className="p-2 text-xl bg-[#F84E45] text-white font-medium">Subscribe</button>
            </div>

            <div>
              <h1 className="text-2xl font-medium my-2">Follow Us</h1>
              <div className="grid grid-cols-2 gap-2">
                  {social.map((soc, index)=>
                    <motion.div initial={{scale:1, borderColor:'black'}} whileHover={{scale:1.1}} key={index} className={`border-2 border-${soc?.color} rounded-lg px-2 pb-2 cursor-pointer`}>
                    <div className="flex  items-center p-2 gap-2">
                      <h1 className={`text-${soc?.color}`}>{soc?.icon}</h1>
                      <h1>{soc.media}</h1>
                    </div>
                    <h1 className="text-xs font-medium">{soc.url}</h1>
                    </motion.div>
                    )}
              </div>
            </div>

          </div>
      <div></div>
    </div>
  );
};

export default ThirdSection;