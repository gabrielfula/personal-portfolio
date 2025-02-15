import Link from "next/link";

type MobileNavProps = {
     handleClick: () => void;
}

export default function MobileNav({ handleClick }: MobileNavProps) {
     return (
          <>
               <div className="flex fixed inset-0 bg-white z-20 justify-center items-center md:hidden">
                    <div className="flex flex-col gap-10 text-black text-xl">
                         <Link href="#about" onClick={handleClick} className="hover:text-gray-300">
                            Sobre
                        </Link>
                        <Link href="#experience" onClick={handleClick} className="hover:text-gray-300">
                            Experiência
                        </Link>
                        <Link href="#projects" onClick={handleClick} className="hover:text-gray-300">
                            Projetos
                        </Link>
                        <Link href="#contacts" onClick={handleClick} className="hover:text-gray-300">
                            Contato
                        </Link>
                    </div>
               </div>
          </>
     );
}
