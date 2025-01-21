'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('overflow-hidden', !isOpen);
    };

    return (
          <nav className="fixed top-0 w-full bg-background h-12 flex items-center justify-between px-4 z-50">
               <div>
                    <p className="text-2xl font-bold tracking-wide">{"<"} Fula {"/>"}</p>
               </div>
               <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                         {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
               </div>
               <div className={`md:flex gap-14 
                    ${isOpen ? 'flex bg-white items-center justify-center z-20 h-screen top-12 left-0' : 'hidden '} 
                    flex-col md:flex-row items-center w-full md:w-auto md:h-auto absolute md:static md:top-0`}
               >
                    <Link href="#" onClick={(() => setIsOpen(false))}>
                         <span className="text-gray hover:text-black transition ease-in-out duration-500 px-4 py-2 md:px-0">Inicio</span>
                    </Link>
                    <Link href="#about" onClick={(() => setIsOpen(false))}>
                         <span className="text-gray hover:text-black transition ease-in-out duration-500 px-4 py-2 md:px-0">Sobre</span>
                    </Link>
                    <Link href="#experience" onClick={(() => setIsOpen(false))}>
                         <span className="text-gray hover:text-black transition ease-in-out duration-500 px-4 py-2 md:px-0">Experiência</span>
                    </Link>
                    <Link href="#projects" onClick={(() => setIsOpen(false))}>
                         <span className="text-gray hover:text-black transition ease-in-out duration-500 px-4 py-2 md:px-0">Projetos</span>
                    </Link>
                    <Link href="#contacts" onClick={(() => setIsOpen(false))}>
                         <span className="text-gray hover:text-black transition ease-in-out duration-500 px-4 py-2 md:px-0">Contato</span>
                    </Link>
               </div>
          </nav>
    );
}
