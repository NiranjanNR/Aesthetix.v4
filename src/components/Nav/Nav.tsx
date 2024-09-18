import { Dropdown, Navbar, NavbarCollapse } from "flowbite-react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
      <div className="ml-6 mr-10 font-semibold pt-2">
          <Navbar fluid rounded >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">aesthetix</span>
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
          <Dropdown.Item>
            <Link to="/about">About</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/our-people">Our People</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/career">Career</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/location">Location</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/support">Support</Link>
          </Dropdown.Item>
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
          <Dropdown.Item>
            <Link to="/corporate">Corporate</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/government">Government</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/hospitality">Hospitality</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/education">Education</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/retail">Retail</Link>
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
          <Dropdown.Item>
            <Link to="/av">AV</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/it-service">IT Service</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/elt">ELT</Link>
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
          <Dropdown.Item>
            <Link to="/project-files">Project Files</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/case-study">Case Study</Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </NavbarCollapse>
      
    </Navbar>
    </div>
  )
}

export default Nav;
