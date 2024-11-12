import { Dropdown, Navbar, NavbarCollapse } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  return (
      <div className="ml-6 mr-10 font-semibold pt-2 primary-color">
          <Navbar fluid rounded >
      <Navbar.Brand>
      <Link to="/"><span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">aesthetix</span></Link>
        
              </Navbar.Brand>
    <Navbar.Toggle />
        <NavbarCollapse>
        <div className="md:flex gap-7">
        <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Company</span>
            </div>
          }
        >
          <Dropdown.Item onClick={() => navigate('/about')}>
            About
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/our-people')}>
            Our People & Culture
          </Dropdown.Item>
          {/* <Dropdown.Item>
            <Link to="/career">Career</Link>
          </Dropdown.Item> */}
          <Dropdown.Item onClick={() => navigate('/location')}>
            Location
          </Dropdown.Item>
          {/* <Dropdown.Item onClick={() => navigate('/support')}>
            Support
          </Dropdown.Item> */}
        </Dropdown>
              <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Verticals</span>
            </div>
          }
        >
          <Dropdown.Item onClick={() => navigate('/corporate')}>
            Corporate
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/government')}>
            Government
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/hospitality')}>
            Hospitality & Entertainment
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/education')}>
            Education
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/retail')}>
            Retail
          </Dropdown.Item>
        </Dropdown>
        <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Solutions</span>
            </div>
          }
        >
          <Dropdown.Item onClick={() => navigate('/av')}>
            AV
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/it-service')}>
            IT Service
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/elv')}>
            ELV
          </Dropdown.Item>
          
        </Dropdown>
        <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Resources</span>
            </div>
          }
        >
          <Dropdown.Item onClick={() => navigate('/project-files')}>
            Project Files
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/case-study')}>
            Case Study
          </Dropdown.Item>
        </Dropdown>
      </div>
    </NavbarCollapse>
      
    </Navbar>
    </div>
  )
}

export default Nav;
