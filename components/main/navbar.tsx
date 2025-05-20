"use client"

import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="w-full h-[85px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png" 
            alt="Logo"
            width={70}
            height={75}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin !h-[75px]"
          />
          <div className="font-bold ml-[10px] border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-300">
            Ashish Sharma
          </div>
        </Link>

        <div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:underline hover:underline-offset-8 decoration-4 decoration-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}

          <a
            href="/pdfs/Resume_Ashish.pdf"
            target="_self"
            rel="noreferrer noopener"
            className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            download="AshishSharma"
          >
            <span className="text-[15px] ml-[6px]">Download CV</span>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden w-full absolute top-[85px] md:top-[66px] left-0 md:p-5 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center justify-center w-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-4 py-2 rounded-b-lg text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link key={link.title} href={link.link} className="cursor-pointer py-2 hover:underline hover:underline-offset-8 decoration-4 decoration-[rgb(112,66,248)] transition">
                {link.title}
              </Link>
            ))}

            {/* {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-6 w-6 text-white mt-2" />
              </Link>
            ))} */}

            <a href="/pdfs/Resume_Ashish.pdf" target="_self" rel="noreferrer noopener" className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" download="AshishSharma">
              <span className="text-[15px] ml-[6px]">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
