// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import portfolioIcon from '../../Icons/portfolio.png';
// import homeIcon from '../../Icons/home.png';
// import projectIcon from '../../Icons/project.png';
// import skillsIcon from '../../Icons/skills.png';
// import contactMeIcon from '../../Icons/contactMe.png';
// import './Header.css';

// const Header = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" className="header">
//         <div className='heading'>
//           <div className='icon-heading'>
//           <img src={portfolioIcon} alt='portfolio-icon'/>
//           <Navbar.Brand href="#home" style={{ color:'#068FFF'}}>Somya's Portfolio</Navbar.Brand>
//           </div>
          
//           <Navbar.Toggle aria-controls="navbar-nav"/>
//           <Navbar.Collapse id="navbar-nav" >
//             <Nav className="mx-auto"> 
//             <img src={homeIcon} alt='home-icon' className="nav-img"/>
//               <Nav.Link href="#home">Home</Nav.Link>
//               <img src={projectIcon} alt='project-icon' className="nav-img"/>
//               <Nav.Link href="#projects">Projects</Nav.Link>
//               <img src={skillsIcon} alt='skills-icon' className="nav-img"/>
//               <Nav.Link href="#skills">Skills</Nav.Link>
//               <img src={contactMeIcon} alt='contactMe-icon' className="nav-img"/>
//               <Nav.Link href="#contact">Contact Me</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Navbar>
//     </>
//   );
// }

// export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import portfolioIcon from '../../Icons/portfolio.png';
import homeIcon from '../../Icons/home.png';
import projectIcon from '../../Icons/project.png';
import skillsIcon from '../../Icons/skills.png';
import contactMeIcon from '../../Icons/contactMe.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <div className='heading'>
          <div className='icon-heading'>
            <img src={portfolioIcon} alt='portfolio-icon'/>
            <Navbar.Brand href="#home" style={{ color:'aliceblue'}}>Somya's Portfolio</Navbar.Brand>
          </div>
          
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <div className="nav-item">
                <img src={homeIcon} alt='home-icon' className="nav-img" />
                <Nav.Link href="#home">Home</Nav.Link>
              </div>
              <div className="nav-item">
                <img src={projectIcon} alt='project-icon' className="nav-img" />
                <Nav.Link href="#projects">Projects</Nav.Link>
              </div>
              <div className="nav-item">
                <img src={skillsIcon} alt='skills-icon' className="nav-img" />
                <Nav.Link href="#skills">Skills</Nav.Link>
              </div>
              <div className="nav-item">
                <img src={contactMeIcon} alt='contactMe-icon' className="nav-img" />
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
