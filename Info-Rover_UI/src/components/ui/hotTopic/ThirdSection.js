"use client"
import { FaRegNewspaper } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const ThirdSection = () => {
  const social =[
    {
      media:'Twitter',
      url:'twitter.com/InfoRover',
      icon:<BsTwitterX />,
      color:'black'
    },
    {
      media:'LinkedIn',
      url:'in/InfoRover/',
      icon:<FaLinkedinIn />,
      color:'blue-500'
    },
    {
      media:'Facebook',
      url:'facebook.com/InfoRover',
      icon:<FaFacebookF />,
      color:'blue-500'
    },
    {
      media:'Pinterest',
      url:'pinterest.com/InfoRover',
      icon:<FaPinterest />,
      color:'red-500'

    }
  ]
  return (
    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto ">
          <div className="col-span-3">
            <h1 >hello</h1>
          </div>
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
                    <div key={index} className={`border-2 border-${soc.color} rounded-lg px-2 pb-2`}>
                    <div className="flex  items-center p-2 gap-5">
                      <h1 className={`text-${soc.color}`}>{soc.icon}</h1>
                      <h1>{soc.media}</h1>
                    </div>
                    <h1 className="text-xs font-medium">{soc.url}</h1>
                    </div>
                    )}
              </div>
            </div>

          </div>
      <div></div>
    </div>
  );
};

export default ThirdSection;