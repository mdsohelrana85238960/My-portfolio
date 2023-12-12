import About from "./About";
import Banner from "./Banner";
import Education from "./Education";
import Footer from "./Footer";
import Project from "./Project";
import Contact from "./Router/Contact";
import Navbar from "./Router/Navbar";
import Skills from "./Skills";



const Home = () => {
    return (
        <div className=" overflow-hidden bg-slate-800">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
            


            <Footer></Footer>
        </div>
    );
};

export default Home;