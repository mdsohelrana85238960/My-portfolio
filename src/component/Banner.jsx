import "../component/css/borderAnimation.css"

import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useEffect,useRef } from "react";
import Typed from 'typed.js';

const Banner = () => {
    const el = useRef(null);
    useEffect(() =>{
        const typed = new Typed(el.current,{
            strings: ['Frontend Developer','MERN Stack Developer','Web Developer'],
            startDelay:300,
            typeSpeed:150,
            backDelay:150,
            backSpeed:150,
            smartBackspace:true,
            showCursor:false,
            loop:true,
        })
    })
    return (
        
<div className="hero min-h-screen " style={{backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16916.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content  text-neutral-content">
   
  <div className="max-w-7xl mx-auto">
            <div className="md:flex md:flex-row-reverse  text-white h-screen items-center justify-between gap-8">

            <div>
                
                <img data-aos="fade-left"
     data-aos-duration="3000" className="w-[800px] py-20" src="https://i.ibb.co/vJ9rzJf/sohel12-01-removebg-preview.png" alt="" />
            </div>
         


           <div data-aos="fade-right"
     data-aos-duration="3000" className="w-[600px] ">
           <h1 className="text-xl"> Hello, I'm </h1>
            <h3  className="text-5xl py-2 font-medium">Md.Sohel Rana</h3>
            <h1 className="text-xl mb-2"> And I am a <span ref={el} className="text-2xl font-medium text-red-500"></span> </h1>
            <p>Enthusiastic and detail-oriented MERN Stack Developer with [1 years] of experience in designing, implementing, and deploying full-stack web applications. Adept at leveraging cutting-edge technologies to deliver innovative solutions. Eager to contribute technical skills and passion for problem-solving to a dynamic development team.
</p>

            <div className="flex gap-4 mt-4 mb-4 py-2 ">
            <a className="text-2xl" href="https://www.facebook.com/mdsohelrana85238960/"> <SiFacebook /> </a>
            <a className="text-2xl" href="https://www.linkedin.com/in/md-sohel-rana-8912a82a3/"><FaLinkedin /></a>
            <a className="text-2xl" href="https://github.com/mdsohelrana85238960"><FaGithub /></a>
            </div>

            <button className="btn btn-outline btn-error">About me</button>
           </div>

           

            </div>

        </div>

  </div>
</div>
    );
};

export default Banner;


