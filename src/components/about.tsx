import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
    return (
        <>
          <div className="flex md:flex-row flex-col justify-center h-full items-center">
               <div>
                    <div className="flex flex-col items-center mb-5 md:mb-0 md:items-start">
                         <div>
                              <p className="text-2xl font-medium text-center md:text-start">Meu nome é,</p>
                              <span className="md:text-5xl text-4xl">Gabriel Fulaneto!</span>
                         </div>
                         <div className="w-2/3 mt-1">
                              <p className="text-sm text-gray md:text-start text-center">
                                   Sou Desenvolvedor FullStack com 1 ano de experiência profissional focado no desenvolvimento de APIs e interfaces modernas.
                              </p>
                         </div>
                         <div className="flex gap-5 items-center mt-5">
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.5 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.8 }}
                              >
                                   <a
                                        href="/cv/cv-gabriel-fulaneto.pdf"
                                        type="application/pdf"
                                        download={"GabrielFulanetoCV.pdf"}
                                        className="text-sm border px-4 py-2 mt-4 rounded hover:bg-black hover:text-white transition-all duration-200">
                                        Baixar CV
                                   </a>
                              </motion.div>
                              <motion.div 
                                   initial={{ opacity: 0, scale: 0.5 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.8 }}
                              >
                                   
                                   <div className="border px-5 py-2 rounded hover:bg-black hover:text-white transition-all duration-200">
                                        <Link href={'https://www.linkedin.com/in/gabriel-fulaneto/'} target="_blank">
                                             <Linkedin />
                                        </Link>
                                   </div>
                              </motion.div>
                              <motion.div 
                                   initial={{ opacity: 0, scale: 0.5 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.8 }}
                              >
                                   <div className="border px-5 py-2 rounded hover:bg-black hover:text-white transition-all duration-200">
                                        <Link href={'https://github.com/gabrielfula'} target="_blank">
                                             <Github />
                                        </Link>   
                                   </div>
                                   
                              </motion.div>
                         </div>
                        
                    </div>
               </div>
               <div className="hover:mix-blend-normal px-5 md:px-0">
                    <Image 
                         src={'/images/personal-image.jpeg'}
                         width={400}
                         height={400}
                         alt="Profile Image"
                         className="rounded-2xl"
                    />  
               </div>
          </div>
        </>
    );
}