"use client" // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrDomain } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { MdPermDeviceInformation } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { GrArticle } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import { UserButton, useUser } from '@clerk/nextjs';




const Navbar = () => {

  const {user, isLoaded} = useUser();
 
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 764 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 764 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };


  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='w-[120px]' src="/meshboc1.png" width={200} height={200} alt="" />
        </Link>
      </div>
        {/* New fix */}
        {/*New fix up */}
        
      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line  ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        // <p></p>
       
        <ul className="nav-links flex justify-center gap-2 text-md text-center">
          <li>
          <Link href={'/'} className={`links `} >
              HOME
            </Link>
          </li>
          <li>
          <Link href={'/enrol'} className={`links `}>
              ENROL
            </Link>
          </li>
          <li>
            <Link href={'/aboutus'} className={`links `} >
              ABOUT
            </Link>
          </li>
          <li>
            <Link href={'/blogs'} className={`links `} >
              BLOGS
            </Link> 
          </li>
          <li>
            <Link href={'/contact'} className={`links `} >
              CONTACT
            </Link>
          </li>
          {
            user ? 
            <li>
            <Link href={'/profile'} className={`links `} >
              DASHBOARD
            </Link>
          </li>
          :
          <li>
          <Link href={'/'} className={`links `} >
            
          </Link>
        </li>
          }
        </ul>
   
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
          <IoCloseSharp className='text-gray-600' />
          </button>
          <ul>
          <li className=''>
            {isLoaded&&user
            ?
            <UserButton/>
              :
           <Link href={"/sign-up"}><Button variant="outline" className="text-black w-[150px] h-[50px] bg-primary" onClick={handleMenuClick}>REGISTER</Button></Link> 
              }
            </li>
            {
              user ? 
              <li>
              <Link href={'/profile'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <IoHome /> 
              DASHBOARD
              </Link>
            </li>
            :
            <li>
            <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
            <IoHome /> 
            HOME
            </Link>
          </li>
            }
            <li>
              <Link href={'/enrol'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <BsRocketTakeoff /> 
              ENROL
              </Link>
            </li>
            <li>
              <Link href={'/aboutus'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <MdPermDeviceInformation />
              ABOUT
              </Link>
            </li>
            <li>
              <Link href={'/blogs'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <GrArticle /> 
              BLOGS
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <SlLocationPin  /> 
              CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className='hide'>
        {isLoaded&&user
        ?
        <UserButton/>
        :
      <Link href={"/sign-up"}><Button variant="outline" className="text-black border-black text-[16px] w-[150px] h-[50px]">ENROL</Button></Link> 
        }
      </div>
    </nav>
    </>
  );
};

export default Navbar;
