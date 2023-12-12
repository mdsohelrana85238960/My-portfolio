import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
           
          <p>Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="text-3xl" href="https://github.com/mdsohelrana85238960"><FaGithub></FaGithub></a>
        <a className="text-3xl" href="https://www.linkedin.com/in/md-sohel-rana-8912a82a3/"><FaLinkedin></FaLinkedin></a>
        <a className="text-3xl" href="https://www.facebook.com/mdsohelrana85238960/"><SiFacebook></SiFacebook></a>
        
        </nav>
      </footer>
    );
};

export default Footer;