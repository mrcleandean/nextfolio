"use client";
import { navLinks } from "."
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [active, setActive] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div className="
        w-full h-[77.5px] 
        folionav:px-10 z-50
        fixed top-0
        flex items-center 
        bg-[#11151c] border-b-4 border-b-white
        "
        >
            <div className="
            w-full max-w-7xl 
            flex justify-between items-center 
            ">
                <Link href="/#hero" className="flex justify-center items-center" onClick={() => setActive('')}>
                    <Image
                        src={'/demdevvy-min.png'}
                        alt="logo"
                        width={96}
                        height={96}
                        priority
                        className="object-contain relative top-1 w-auto"
                    />
                    <h1 className="font-sans font-[800] tracking-wide folionav:text-xl text-sm text-white">Creative Dev</h1>
                </Link>
                <ul className="
                hidden folionav:flex flex-row justify-evenly gap-5
                list-none 
                ">
                    {navLinks.map(navLink => {
                        return (
                            <Link
                                href={navLink.href}
                                key={navLink.title}
                                onClick={() => setActive(navLink.href)}
                            >
                                <li
                                    className={`
                                ${active === navLink.href ? 'text-secondary' : 'text-white'} hover:text-secondary 
                                hover:cursor-pointer 
                                text-[18px] font-medium
                                `}
                                >
                                    {navLink.title}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                <div className="
                flex justify-center items-center mr-3.5 
                folionav:hidden"
                    onClick={() => setMobileOpen(prev => !prev)}>
                    {
                        mobileOpen
                            ? <AiOutlineClose color="white" size={32.5} />
                            : <AiOutlineMenu color="white" size={32.5} />
                    }
                </div>
                <motion.ul
                    variants={{
                        hidden: {
                            x: '100%',
                            transition: {
                                ease: 'easeOut',
                                type: 'tween',
                                duration: 0.25
                            }
                        },
                        show: {
                            x: 0,
                            transition: {
                                ease: 'easeOut',
                                type: 'tween',
                                duration: 0.25
                            }
                        }
                    }}
                    initial="hidden"
                    animate={mobileOpen ? 'show' : 'hidden'}
                    className="
                    flex flex-col justify-center items-center px-5 py-2 bg-white absolute right-0 top-[4.75rem] rounded-bl-lg
                    folionav:hidden
                    "
                >
                    {navLinks.map(navLink => {
                        return (
                            <Link
                                href={navLink.href}
                                key={navLink.title}
                                onClick={() => setActive(navLink.href)}
                            >
                                <li
                                    className={`
                                ${active === navLink.href ? 'text-secondary' : 'text-black'}
                                hover:cursor-pointer 
                                text-[18px] font-medium
                                `}
                                >
                                    {navLink.title}
                                </li>
                            </Link>
                        )
                    })}
                </motion.ul>
            </div>
        </div>
    )
}

export default Navbar