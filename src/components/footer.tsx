import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
     return (
          <>
               <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex justify-between items-center md:flex-row flex-col mb-5 gap-5">
                         <div className="flex gap-2 items-center">
                              <div>
                                   <Link href="https://wa.me/5519987319069?text=Ol%C3%A1%2C+visualizei+seu+portf%C3%B3lio.+Gostaria+de+entrar+em+contato+%21"
                                   target={"_blank"}
                                   className="md:text-lg text-sm flex gap-4 items-center border px-4 py-2 mt-4 rounded hover:bg-black hover:text-white transition-all duration-200"
                                   >
                                        Vamos conversar
                                        <MoveRight size={32} strokeWidth={1.5} />
                                   </Link>
                              </div>
                         </div>
                         <div>
                              <p className="text-sm text-gray">gabriel.fulaneto0301@gmail.com</p>
                         </div>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                         <p className="text-sm text-gray-500">© Gabriel Fulaneto - 2025</p>
                         <div className="flex gap-2 items-center">
                              <Link className="underline text-blue-700" href={'https://www.linkedin.com/in/gabriel-fulaneto/'}
                              target="_blank"
                              >
                                   Linkedin
                              </Link>
                              <Link className="underline text-blue-700" href={'https://github.com/gabrielfula'}
                              target="_blank"
                              >
                                   Github
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
}
