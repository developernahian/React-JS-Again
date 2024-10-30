import { useState } from 'react';

import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {

  const [open, setOpen] = useState(false)




  //ChatGPT-> give me 5 data for a react app in an array of javascript. give me id , path and name only -> write each object in one line
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className='p-6 bg-yellow-200'>
      <div className="md:hidden " onClick={() => setOpen(!open)}>
      {
        open === true ? 
        <RxCross1 className="text-3xl "></RxCross1> 
        : <FiMenu className="text-3xl "></FiMenu>
      }
      
      </div>
    

      {/* <ul className={`md:flex absolute  ${open ? '' : 'hidden'} duration-1000  bg-yellow-200 px-7`}> */}
      <ul className={`md:flex absolute md:static  ${open ? 'top-16' : '-top-60'} duration-1000  bg-yellow-200 px-7`}>
      {
        routes.map((route) => <Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nav>
  );
};

export default NavBar;
