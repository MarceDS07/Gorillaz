import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  return (
    <>
      <header className="z-50 font-oswald font-bold fixed w-full h-28 bg-black border-b-2 border-white flex justify-around items-center text-zinc-50 md:px-20 hover:scale-110 transition duration-300">
        <a className="hover:scale-150 transition duration-300" href="">
          PRODUCTOS
        </a>
        <a className="hover:scale-150 transition duration-300" href="">
          DONDE ENCONTRARNOS
        </a>
        <div className="h-full py-4 flex flex-row md:flex-col  items-center">
          <img src="src\assets\isotipo.png" className="h-3/4 w-auto" />
          <img src="src\assets\logotipo.png" className="h-1/3 w-auto" />
        </div>
        <a className="hover:scale-150 transition duration-300" href="">
          NOSOTROS
        </a>
        <a className="hover:scale-150 transition duration-300" href="">
          CONTACTANOS
        </a>
      </header>

      <section className="w-full h-dvh bg-black border-b-2 border-white overflow-hidden flex items-center justify-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="src\assets\primera.jpg" className="w-full" alt="" />
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <section className="w-full h-dvh bg-black border-b-2 border-white"></section>
      <section className="w-full h-dvh bg-black border-b-2 border-white"></section>
      <section className="w-full h-dvh bg-black border-b-2 border-white"></section>

      <section id="center"></section>
      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
