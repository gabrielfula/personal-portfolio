import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
     image: string;
     title: string;
     description: string;
     stack: string;
     deploy: string;
     repository: string;
}

export default function ProjectCard({ 
     image, title, description, stack, repository, deploy
}: ProjectCardProps) {
     return (
          <div className="flex md:flex-row flex-col md:items-start items-center gap-14 justify-center">
               <div>
                    <Image 
                         src={image}
                         width={400}
                         height={400}
                         alt="Project image"
                         className="rounded"
                    />
               </div>
               <div className="md:w-1/2">
                    <p className="font-medium uppercase">{title}</p>
                    <div className="mt-3">
                         <p className="text-sm">{description}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                         <span className="font-semibold">Stack: </span>
                         <p className="text-sm text-gray">{stack}</p>
                    </div>
                    <div className="mt-3 flex gap-10">
                         <Link href={deploy} className="text-sm border px-5 py-2 rounded hover:bg-black hover:text-white transition-all duration-200">Deploy</Link>
                         <Link href={repository} className="text-sm border px-5 py-2 rounded hover:bg-black hover:text-white transition-all duration-200">Repositório</Link>
                    </div>
               </div>
          </div>
     );
}