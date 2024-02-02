'use client'
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"

const Footer = () => {
    const social = [
        {icon:<FaLinkedinIn />},
        {icon:<FaFacebookF />},
        {icon:<FaXTwitter />},
        {icon:<FaPinterestP />}
    ]
    return (
        <div className="mt-10  border-t-2 border-[#F84E45]">
            <footer className="md:grid  space-y-10 grid-cols-3 p-10  bg-white max-w-7xl mx-auto">
                <div className="space-y-2">
                <img className="w-1/2" alt="info-rover-logo" src="https://i.ibb.co/59Nnf8f/info-rover-high-resolution-logo-transparent.png"/>
                <h1 className="font-medium ">Sharing truth since 1971</h1>
                </div>
                <div className="flex flex-col m-0">
                    <h6 className= "text-2xl m-0">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div className="m-0">
                    <h6 className="text-2xl">Social</h6> 
                    <div className="flex  gap-4 text-[#F84E45]">
                        {social.map((soc,index)=>
                            <motion.h1 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0.05*index, }}  key={index} className="text-3xl">{soc.icon}</motion.h1>
                            )}
                    
                    </div>
                </div>
        </footer>
        </div>
    );
};

export default Footer;