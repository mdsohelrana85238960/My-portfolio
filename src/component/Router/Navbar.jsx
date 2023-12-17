




const Navbar = () => {
  const downloadResume = () => {
    // Replace 'your_file_id' with the actual file ID from your Google Drive
    const fileId = '1HsNCzp--qlqRqISzl_TTczYdMl0uy3le';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a hidden link and trigger a click to download the file
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'your_resume_filename.pdf'; // Replace with your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar fixed z-50 bg-gray-800">
      
      <div className="navbar-start">
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
         <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
         </div>
         <a className="btn btn-ghost text-xl"><img className="w-20" src="https://i.ibb.co/9csqpGT/flamingtext-23088239082509331-removebg-preview.png" alt="" /> </a>
       </div>
       <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">

          <li><a className="text-xl font-medium text-white"  href="#about">About</a></li>
          <li><a className="text-xl font-medium text-white" href="#education">Education</a></li>
          <li><a className="text-xl font-medium text-white" href="#project">Projects</a></li>
          <li><a className="text-xl font-medium text-white" href="#skills">Skills</a></li>
           <li><a className="text-xl font-medium text-white" href="#contact">Contact</a></li>
            
         </ul>
       </div>

      <div className="navbar-end">
        <button className="btn btn-outline btn-error" onClick={downloadResume}>
          RESUME
        </button>
      </div>
    </div>
  );
};

export default Navbar;
