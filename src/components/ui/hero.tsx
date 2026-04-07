import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-[85vh] bg-black border-b-2 border-white overflow-hidden"
      >
        <Carousel
          className="w-full h-full"
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent className="h-[85vh] ml-0">
            <CarouselItem className="h-full pl-0">
              <img
                src="src/assets/primera.jpg"
                className="w-full h-full object-cover block"
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="h-full pl-0">
              <img
                src="src/assets/primera.jpg"
                className="w-full h-full object-cover block"
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="h-full pl-0">
              <img
                src="src/assets/primera.jpg"
                className="w-full h-full object-cover block"
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
}
