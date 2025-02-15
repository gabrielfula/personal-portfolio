import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';
import { experienceData } from "@/mocks/experience";

export default function Experience() {
    const data = experienceData.map((item, index) => ({
        title: item.date,
        content: (
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
                              <p className="font-medium uppercase md:text-lg text-xs">{item.company} /</p>
                              <span className="text-gray">{item.role}</span>
                         </div>
                    </div>
                    <div>
                         <p className="text-sm text-zinc-800">{item.description}</p>
                    </div>
                    <div>
                         <p className="font-medium uppercase">Marcos de reconhecimento</p>
                         <ul className="list-disc pl-5 mt-5 space-y-1">
                              {item.recognition.map((rec, idx) => (
                                   <li key={idx} className="text-sm text-zinc-800">{rec}</li>
                              ))}
                         </ul>
                    </div>

                    <div className="flex gap-2 items-center">
                         <p className="font-medium uppercase">Stack: </p>
                         <p className="text-sm text-zinc-800">{item.stack}</p>
                    </div>

                    <div className="flex justify-end">
                         <div className="w-1/3 border-b border-zinc-800 mt-5" />
                    </div>
               </motion.div>
        ),
    }));

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
