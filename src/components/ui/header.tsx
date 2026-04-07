import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`hidden z-50 font-oswald font-extrabold fixed w-full h-28 border-b-2 md:grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-4 text-zinc-50 md:px-20 hover:scale-110 transition duration-300
        ${
          scrolled
            ? "bg-black border-white"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex flex-row items-center justify-evenly">
          <a
            className="hover:scale-150 transition duration-300"
            href="#productos"
          >
            PRODUCTOS
          </a>
          <a
            className="hover:scale-150 transition duration-300"
            href="#clientes"
          >
            NUESTROS CLIENTES
          </a>
        </div>
        <a
          href="#hero"
          className="h-full py-4 flex flex-row md:flex-col  items-center"
        >
          <img src="src\assets\isotipo.png" className="h-3/4 w-auto" />
          <img src="src\assets\logotipo.png" className="h-1/3 w-auto" />
        </a>
        <div className="flex flex-row items-center justify-evenly">
          <a
            className="hover:scale-150 transition duration-300"
            href="#nosotros"
          >
            NOSOTROS
          </a>
          <a
            className="hover:scale-150 transition duration-300"
            href="#contactanos"
          >
            CONTACTANOS
          </a>
        </div>
      </header>

      <header
        className={`z-50 font-oswald font-extrabold fixed w-full h-28 border-b-2 flex justify-center items-center flex-col md:hidden text-zinc-50 md:px-20 hover:scale-110 transition duration-300 
            ${
              scrolled
                ? "bg-black border-white"
                : "bg-transparent border-transparent"
            }`}
      >
        <div className="h-full py-4 flex flex-row md:flex-col  items-center">
          <img src="src\assets\isotipo.png" className="h-3/4 w-auto" />
          <img src="src\assets\logotipo.png" className="h-1/3 w-auto" />
        </div>
      </header>
    </>
  );
}
