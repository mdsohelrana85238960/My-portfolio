import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    return (
        <div  className='text-white px-8 max-w-7xl mx-auto'>

<div  className="text-center mt-32 mb-16">
       <h1 data-aos="fade-right"
     data-aos-duration="2000"  className="text-4xl my-2 font-medium  text-red-500"> Education</h1> 
     <p data-aos="fade-left"
     data-aos-duration="2000" className="text-white  text-2xl">Educational Qualifications.</p>

       </div>
          
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      
      <FaGraduationCap />
    </div>
    <div data-aos="fade-right"
     data-aos-duration="2000" className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2021-2025*</time>
      <div className="text-lg font-black"> Bachelor of Arts</div>
      <p className="font-bold">Pirganj Gvt College </p>
I am studying in Pirganj Government College from 2021 in Islamic History and Culture Group but there was a demand for programming education so I am doing programming along with studies.
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <FaGraduationCap />
    </div>
    <div data-aos="fade-left"
     data-aos-duration="2000" className="timeline-end mb-10">
    <time className="font-mono italic">2018-2020</time>
      <div className="text-lg font-black">Higher Secondary School Certificate</div>
      <p className="font-bold">Ranisonkail College</p>
      Science Group, HSC batch of 2018. I started to wondering how a website is built. So, started to learn HTML & CSS. I can still how I felt after seeing the Hello World! in Chrome.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <FaGraduationCap />
    </div>
    <div data-aos="fade-right"
     data-aos-duration="2000" className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2016-2018</time>
      <div className="text-lg font-black">Secondary School Certificate</div>
      <p className="font-bold">Atghoria High School</p>
      Science Group, SSC batch of 2016. In this time my hobby was Photography and Cycling. I always want to learn and implement newer things. I was a very quick learner.
    </div>
    <hr />
  </li>
  
</ul>

        </div>
    );
};

export default Education;