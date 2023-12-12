import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { ContactUs } from "./ContactForm";

const Contact = () => {
    return (
        <div className='text-white  max-w-7xl mx-auto'>

<div className="text-center mt-32 mb-16">
       <h1 className="text-4xl my-2 font-medium text-white"> Contact Us</h1> 
      
       </div>


            <div className="lg:flex gap-20">

            <div className="w-[600px]">
                <h1 className="text-2xl font-medium mb-3">Get in Touch</h1>
                <p>I am a hard-working, reliable web developer. I love being in this line of work because I am passionate about technology, design, and innovation.</p>

                <div className="flex items-center mt-3 gap-4">
                <IoIosContact className="text-3xl" />
                <div> 
                    <h1 className="font-bold">Name </h1>
                    <p>Md.Sohel Rana</p>
                 </div>

                </div>

                <div className="flex items-center mt-3 gap-4">
                <FaLocationDot className="text-3xl" />
                <div> 
                    <h1 className="font-bold">Address </h1>
                    <p>Thakurgoan,Bangladesh</p>
                 </div>

                 
                </div>

                <div className="flex items-center mt-3 gap-4">
                <MdEmail  className="text-3xl" />
                <div> 
                    <h1 className="font-bold">Email</h1>
                    <p>mdsohelrana01965079@gmail.com</p>
                 </div>
                </div>

                <div className="flex items-center mt-3 gap-4">
                <MdAddCall className="text-3xl" />
                 <div> 
                    <h1 className="font-bold">Number</h1>
                    <p>+8801701965079</p>
                 </div>

                </div>

            </div>

            <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Contact;