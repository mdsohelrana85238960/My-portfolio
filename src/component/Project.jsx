import { FaGithub } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";

const Project = () => {
    return (
        <div className='text-white px-8 max-w-7xl mx-auto'>

<div className="text-center mt-32 mb-16">
       <h1 data-aos="fade-left"
     data-aos-duration="2000" className="text-4xl my-2 font-medium text-red-500"> Project</h1> 
      
       </div>

            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" 
     data-aos-duration="2000">

                <div className="md:flex justify-center items-center gap-12">
                    <img data-aos="fade-right"
     data-aos-duration="2000" className="w-[550px]" src="https://i.ibb.co/FnFHGDw/Screenshot-2023-12-11-210215.png" alt="" />
                    <div>
                        <h1 data-aos="fade-left"
     data-aos-duration="2000" className="text-3xl mt-4 font-medium">Library management</h1>
                        <p data-aos="fade-right"
     data-aos-duration="2000" className="py-2 font-bold text-xl">Projects Overview</p>
                        <li data-aos="fade-left"
     data-aos-duration="2000">My website is a library management system through my website so a user can pick up and bring or return books.</li>
                        <li data-aos="fade-right"
     data-aos-duration="2000"> In this project, In order to get a book, a user must first register and then login.</li>
                        <li data-aos="fade-left"
     data-aos-duration="2000">We applied JWT, Firebase authentication.</li>
                        <div data-aos="fade-right"
     data-aos-duration="2000" className="flex gap-4 pt-2">
                           
                            <a className="flex gap-2 justify-center items-center "  href="https://cd-library-management-system.web.app/"><BsBrowserChrome /> <span className="text-blue-600">Live-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/Library-Management-System-client-side"><FaGithub /> <span className="text-blue-600"> Client-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/Library-Management-System-server-side"><FaGithub /> <span className="text-blue-600">Server-Site</span> </a>
                            
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center items-center gap-12 my-20 ">
                    <img className="w-[550px]" src="https://i.ibb.co/0n0JtkT/Screenshot-2023-12-11-210240.png" alt="" />
                    <div>
                        <h1 className="text-3xl mt-4 font-medium">Shoe Store</h1>
                        <p className="py-2 font-bold text-xl">Projects Overview</p>
                        <li>Anyone who wants to buy shoes must register first .Then he will be taken to the home page after being taken to the home he will be asked to create a store.</li>
                        <li> After buying the shoes, the shopkeeper will give the shopkeeper chat on his own computer.</li>
                        <li>In this project, we added payment, schedule, invoice download, and contact.</li>
                        <div className="flex gap-4 pt-2">
                           
                            <a className="flex gap-2 justify-center items-center "  href="https://inventory-management-sys-3f1da.web.app/"><BsBrowserChrome /> <span className="text-blue-600">Live-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/Inventory-management-system-client-side"><FaGithub /> <span className="text-blue-600"> Client-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/Inventory-management-system-server-side"><FaGithub /> <span className="text-blue-600">Server-Site</span> </a>
                            
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center items-center gap-12">
                    <img className="w-[550px]" src="https://i.ibb.co/r3Pr8xT/Screenshot-2023-12-11-210301.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-medium">Technology-Electronics</h1>
                        <p className="py-2 font-bold text-xl">Projects Overview</p>
                        <li>My website is for product buy The website has tips on how to keep out product buy.</li>
                        <li>In this project, Show home page all brand product click this brand show his current product.</li>
                        <li>When the user logs in, he/she can see a add to cart and see all the reviews he/she has added there, and can delete the reviews if the user wants.</li>
                        <div className="flex gap-4 pt-2">
                           
                            <a className="flex gap-2 justify-center items-center "  href="https://technology-and-electroni-b8171.web.app/"><BsBrowserChrome /> <span className="text-blue-600">Live-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/technology-electronics-client-side"><FaGithub /> <span className="text-blue-600"> Client-Side</span> </a>
                            <a className="flex gap-2 justify-center items-center" href="https://github.com/mdsohelrana85238960/Library-Management-System-server-side"><FaGithub /> <span className="text-blue-600">Server-Site</span> </a>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;