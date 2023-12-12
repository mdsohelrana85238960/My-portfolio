

const About = () => {
    return (
        <div className="text-white">

       <div className="text-center my-20">
       <h1 data-aos="fade-right"
     data-aos-duration="2000" className="text-4xl my-2 font-medium text-red-500"> About Me</h1> 
       
       </div>
        
        <div className="text-white px-8  max-w-7xl mx-auto md:flex gap-20 justify-between items-center">
             
            <div>
                <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-[450px] mx-auto rounded-xl " src="https://media.licdn.com/dms/image/D4E03AQF84NT_0tmfjA/profile-displayphoto-shrink_800_800/0/1702100370033?e=1707955200&v=beta&t=6nRDOqbrKSpdAUeYnIchsEmIGuWLyWaTPc5ng1cgwLA" alt="" />
            </div>

            <div className=" flex-1 mx-auto">
            <h1 data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-xl mt-8 "> Hello, It's Me </h1>
            <h3 data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
              className="text-4xl my-2 font-bold">Md.Sohel Rana</h3>
            <h1 data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-2xl py-2 text-red-500">"Full-stack web developer using MERN."</h1>

            <p data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mb-4">Passionate MERN Stack Developer on a mission to engineer seamless digital experiences that blend innovation with functionality. With a keen eye for detail and a commitment to excellence, I thrive in crafting robust and scalable web applications. My goal is to contribute my technical expertise to a dynamic team where creativity converges with technology to redefine the digital landscape.</p>
            <a href="https://www.linkedin.com/in/md-sohel-rana-8912a82a3/">
                <button data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="btn btn-outline btn-error">Hire Me</button></a>
            </div>

        </div>
        </div>
    );
};

export default About;