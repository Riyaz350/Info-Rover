"use client"
import categories from '../../../../public/cat.json'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoAddCircleOutline } from "react-icons/io5";
import Title from '@/components/shared/Title';
import { motion } from "framer-motion"


const Categories = () => {
    return (
        <div className='bg-white border-2 my-10'>
            <div className='max-w-7xl mx-auto p-2'>
                <Title title='Top Categories' subTitle="Choose your news"></Title>
            <Swiper
                className=""
                slidesPerView={1}
                spaceBetween={10}
                pagination={{clickable: true,}}
                breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20,},
                768: {slidesPerView: 4, spaceBetween: 40,}, 
                1024: { slidesPerView: 5, spaceBetween: 50, }, }} 
                modules={[Pagination]} >
                {categories.map((cat,index)=>
                <SwiperSlide  key={index}>
                    <motion.div initial={{scale:1}} whileHover={{scale:1.1}} transition={{duration:0.3}} className='font-bold w-full md:w-[250px] mx-auto my-10  rounded-lg text-black shadow-lg'>

                    <img className='w-full md:w-[250px] rounded-t-lg' src='https://i.ibb.co/rQ7Lqf6/image.png'/>
                    <h1 className='pl-4 pt-5'>{cat.categoryName}</h1>
                    <div className='flex justify-between px-2 items-center'>
                    <h1 className='p-2 text-xs font-medium'>{cat.totalNews} Articles</h1>
                    <IoAddCircleOutline  className='text-2xl m-2 font-extrabold text-[#F84E45]' />
                    </div>
                    </motion.div>
                </SwiperSlide>)}
            </Swiper>
            </div>
        </div>
    );
};

export default Categories;