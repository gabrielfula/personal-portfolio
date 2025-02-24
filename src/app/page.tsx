'use client'

import { motion } from "motion/react";
import About from "@/components/about";
import Experience from "@/components/experience";
import { MoveDown, MoveUp } from "lucide-react";
import { useEffect, useState } from "react";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
     const [isAtBottom, setIsAtBottom] = useState(false);

     const checkIfAtBottom = () => {
          const sections = ['experience', 'contacts'].map(id => document.getElementById(id));
          const lastSection = sections[sections.length - 1];
          if (lastSection) {
               const rect = lastSection.getBoundingClientRect();
               setIsAtBottom(rect.bottom <= window.innerHeight);
          };
     };

     useEffect(() => {
          window.addEventListener("scroll", checkIfAtBottom);
          return () => {
               window.removeEventListener("scroll", checkIfAtBottom);
          };
     }, []);

     const scrollToNextSection = () => {
          const sections = ['experience', 'contacts'].map(id => document.getElementById(id));

          const currentSectionIndex = sections.findIndex((section) => {
               if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 0 && rect.bottom >= window.innerHeight;
               }
               return false;
          });

          if (currentSectionIndex < sections.length - 1) {
               const nextSection = sections[currentSectionIndex + 1];
               nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
     };

     const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <>
               <motion.div
                    className="min-h-100 border-b border-zinc-300"
                    id="about"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <About />
               </motion.div>

               <motion.div
                    className="border-b border-zinc-300"
                    id="experience"
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <Experience />
               </motion.div>

               <motion.div
                    className="md:p-10 p-5 border-b border-zinc-300"
                    id="projects"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <Projects />
               </motion.div>

               <motion.div
                    className="md:p-10 p-5 border-b border-zinc-300"
                    id="contacts"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <Footer />
               </motion.div>

               <div className="absolute z-10">
                    <div className="fixed bottom-40 left-10">
                         <div
                              className="bg-black h-14 w-14 p-2 rounded-full flex items-center justify-center cursor-pointer"
                              onClick={isAtBottom ? scrollToTop : scrollToNextSection}
                         >
                              {isAtBottom ? (
                                   <MoveUp color="#fafafa" size={24} strokeWidth={2} />
                              ) : (
                                   <MoveDown color="#fafafa" size={24} strokeWidth={2} />
                              )}
                         </div>
                    </div>
               </div>
          </>
     );
}
