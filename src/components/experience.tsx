'use client'

import { motion } from "motion/react";
import { experienceData } from "@/mocks/experience";

export default function Experience() {
    return (
        <>
          <div className="h-full">
               <h2 className="font-bold text-2xl">Experiências</h2>
               <div className="space-y-3 mt-5">
                    {experienceData.map((experience, index) => (
                         <motion.div
                              className="flex flex-col gap-4 mb-10"
                              key={index}
                              initial={{ opacity: 0, y: 50, scale: 0.95 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{
                                  duration: 0.8,
                                  ease: "easeOut",
                                  delay: index * 0.2,
                              }}
                         >
                              <div>
                                   <div className="flex gap-2 items-center">
                                        <p className="font-medium uppercase">{experience.company} /</p>
                                        <span className="text-gray">{experience.role}</span>
                                   </div>
                                   <div>
                                        <p className="text-sm text-gray">{experience.date}</p>
                                   </div>
                              </div>

                              <div>
                                   <p className="text-sm text-zinc-800">{experience.description}</p>
                              </div>
                              <div>
                                   <p className="font-medium uppercase">Marcos de reconhecimento</p>
                                   <ul className="list-disc pl-5 mt-5 space-y-1">
                                        {experience.recognition.map((item, idx) => (
                                             <li key={idx} className="text-sm text-zinc-800">{item}</li>
                                        ))}
                                   </ul>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <p className="font-medium uppercase">Stack: </p>
                                   <p className="text-sm text-zinc-800">{experience.stack}</p>
                              </div>
                              <div className="flex justify-end">
                                   <div className="w-1/3 border-b border-zinc-800 mt-5" />
                              </div>
                         </motion.div>
                    ))}
               </div>
          </div>
        </>
    );
}
