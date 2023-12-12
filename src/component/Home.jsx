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

            <section id="banner">
            <Banner></Banner>
            </section>

            <section id="about">
            <About></About>
            </section>


            <section id="skills">
            <Skills></Skills>
            </section>

            <section id="education">
                <Education></Education>
                </section>

            <section id="project">
            <Project></Project>
            </section>

            <section id="contact">
            <Contact></Contact>
            </section>
       

            <Footer></Footer>
        </div>
    );
};

export default Home;