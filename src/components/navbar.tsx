'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import MobileNav from "./ui/MobileNav";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);


    const handleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
            <nav className="p-5 mb-20 md:p-10 md:px-16">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold tracking-wide">{"<"} Fula {"/>"}</p>
                    </div>
                    <div className="md:flex gap-10 hidden">
                        <Link href="#about" className="hover:text-gray-300">
                            Sobre
                        </Link>
                        <Link href="#experience" className="hover:text-gray-300">
                            Experiência
                        </Link>
                        <Link href="#projects" className="hover:text-gray-300">
                            Projetos
                        </Link>
                        <Link href="#contacts" className="hover:text-gray-300">
                            Contato
                        </Link>
                    </div>
                    <motion.div
                        className="absolute top-5 right-5 z-50 flex flex-col items-center w-8 h-8 cursor-pointer md:hidden"
                        onClick={handleButton}
                        initial={false} 
                        animate={{
                            rotate: isOpen ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="h-[1px] w-10 bg-black mb-1"
                            animate={{
                                opacity: 1,
                                y: isOpen ? 4 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="h-[1px] w-10 bg-black mt-1"
                            animate={{
                                opacity: 1,
                                rotate: isOpen ? 90 : 0,
                                y: isOpen ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <div className="md:hidden">
                        <motion.div
                            className="fixed inset-0 bg-white z-20 flex justify-center items-center"
                            animate={{ height: isOpen ? "100%" : "0%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {/* <AnimatePresence> */}
                                {isOpen && <MobileNav handleClick={handleButton} />}
                            {/* </AnimatePresence> */}
                        </motion.div>
                    </div>
                </div>
            </nav>
    );
}
