"use client"
import React, { useEffect, useRef, useState } from 'react';
import {Autoplay,  Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import hotNews from '../../../../public/news.json'



const HotTopic = () => {
    const [newsess, setNewsess] = useState([])
    const [width1024, setWidth1024] = useState(false)
    useEffect(()=>{
        const newses = hotNews.splice(0,6) 
                setNewsess(newses)
        if(typeof window !== 'undefined'){
            if(window.innerWidth == 1024){
                setWidth1024(true)
                
            }
        }
    },[])
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4 items-center gap-5 max-w-7xl mx-auto'>
            <div className="col-span-2">
                <div className=" ">
                <Swiper slidesPerView={1} spaceBetween={1} freeMode={true} pagination={{clickable: true}} autoplay={{ delay: 1000, disableOnInteraction: false }} modules={[FreeMode, Pagination]} className="mySwiper">
                  {newsess?.map((news, index) => (
                  <SwiperSlide key={index} className='p-10 rounded-lg'>
                    <div className='relative'>
                        <img className={`${width1024 ? 'lg:w-full' : 'lg:w-[900px]'}  rounded-lg lg:h-[380px]`} src='https://i.ibb.co/V29J9YP/nicholas-doherty-p-ONBh-Dy-OFo-M-unsplash.jpg'/>
                        <div className={`${width1024 ? 'lg:h-2/3 ':'lg:h-3/5'} absolute  flex flex-col justify-between  bottom-0 left-0 text-white p-1 lg:p-2 w-full bg-black bg-opacity-30 space-y-0 lg:space-y-2`}>
                            <h1 className='bg-[#F84E45] w-fit p-1 text-xs rounded-lg font-medium'>{news.category}</h1>
                            <h1 className='font-bold text-base lg:text-2xl font-mono'>{news.title}</h1>
                            <h1 className='font-bold text-xs hidden lg:flex lg:text-base '>{news.content.slice(0,100)+'...'}</h1>
                            <div className='flex justify-between items-center p-2'>
                                <div className='flex gap-2'>
                                    <h1 className='flex justify-center items-center gap-1 bg-[#F84E45] rounded-lg p-1 lg:p-2 '><span className='flex gap-1'><FaThumbsUp className='cursor-pointer' /><span className='text-xs'>{news.likeCount}</span></span></h1>
                                    <h1 className='flex justify-center items-center gap-1 bg-[#F84E45] rounded-lg p-1 lg:p-2 '><span className='flex gap-1'><FaThumbsDown className='cursor-pointer' /><span className='text-xs'>{news.dislikeCount}</span></span></h1>
                                </div>
                                <div className='text-[#F84E45] cursor-pointer hover:text-white flex justify-end'>
                                    <FaBookmark />
                                </div>
                            </div>
                        </div>
                    </div>
                  </SwiperSlide>
        ))}
      </Swiper>
                </div>
            </div>


              {newsess?.map((news, index) =>
              <div className='col-span-1 shadow-lg rounded-xl' key={index}>
                <div className="card h-[380px]  bg-white gap-2 shadow-xl">
                <figure><img className='h-[350px]' src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body p-2 h-[200px]">
                      <h1 className='w-full '>{news.title}</h1>
                      <h1 className='font-bold text-xs hidden lg:flex lg:text-base '>{news.content.slice(0,80)+'...'}</h1>
                        <div className='flex '>
                            <h1 className='flex justify-center items-center gap-1  rounded-lg p-1 lg:p-2 '><span className='flex gap-1'><FaThumbsUp className='cursor-pointer' /><span className='text-xs'>{news.likeCount}</span></span></h1>
                            <h1 className='flex justify-center items-center gap-1  rounded-lg p-1 lg:p-2 '><span className='flex gap-1'><FaThumbsDown className='cursor-pointer' /><span className='text-xs'>{news.dislikeCount}</span></span></h1>
                        </div>
                </div>
              </div>
              </div>)}
        </div>
    );
};

export default HotTopic;

