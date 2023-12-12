

const About = () => {
    return (
        <div className="text-white">

       <div className="text-center my-20">
       <h1 className="text-4xl my-2 font-medium"> About Me</h1> 
       <p className="text-xl text-red-500">--Who i am--</p>
       </div>
        
        <div className="text-white   max-w-7xl mx-auto md:flex gap-4 justify-between items-center">
             
            <div>
                <img className="w-[450px] rounded-xl" src="https://media.licdn.com/dms/image/D4E03AQF84NT_0tmfjA/profile-displayphoto-shrink_800_800/0/1702100370033?e=1707955200&v=beta&t=6nRDOqbrKSpdAUeYnIchsEmIGuWLyWaTPc5ng1cgwLA" alt="" />
            </div>

            <div className="w-[700px]">
            <h1 className="text-xl "> Hello, It's Me </h1>
            <h3 className="text-4xl my-2 font-bold">Md.Sohel Rana</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum at magnam quisquam natus consequatur. Nulla eligendi aspernatur minus quos?</p>
            <a href="https://www.linkedin.com/in/md-sohel-rana-8912a82a3/"><button className="btn">Hire Me</button></a>
            </div>

        </div>
        </div>
    );
};

export default About;