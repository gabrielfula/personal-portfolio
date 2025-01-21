import { projectsData } from "@/mocks/projects";
import ProjectCard from "./projects-card";

export default function Projects() {
     return (
          <>
               <div className="h-full">
                    <h2 className="font-bold text-2xl">Projetos Pessoais</h2>
                    <div className="mt-10 flex flex-col gap-24">
                         {projectsData.map((item, index) => {
                              return (
                                   <ProjectCard 
                                        key={index}
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}
                                        stack={item.stack}
                                        deploy={item.deploy}
                                        repository={item.repository}
                                   />
                              )
                         })}
                    </div>
               </div>
          </>
     );
}