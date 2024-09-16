import { Dropdown, Navbar, NavbarCollapse } from "flowbite-react";
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
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Solutions</span>
            </div>
          }
        >
          <Dropdown.Header >
            <span className="block text-lg font-bold">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
              <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Services</span>
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
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
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown size="lg"
          arrowIcon={true}
          inline
          label={
              <div>
                  <span className="hover:text-[#6d2950] font-semibold text-[16px]">Company</span>
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Vish Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </NavbarCollapse>
      
    </Navbar>
    </div>
  )
}

export default Nav;



