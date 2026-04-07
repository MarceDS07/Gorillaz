import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  {
    nombre: "Farsa Burgers",
    direccion: "Roque Graseras 885A",
    maps: "https://maps.app.goo.gl/62rexWbw6663aipCA",
    img: "src/assets/noesfarsa.jpg",
  },
  {
    nombre: "Weiss",
    direccion: "Rambla Gral. Artigas y El Foque Puerto",
    maps: "https://maps.app.goo.gl/6Fbhnr33Jwyx1Ttx5",
    img: "src/assets/weiss.jpg",
  },
  {
    nombre: "Farsa Burgers",
    direccion: "Roque Graseras 885A",
    maps: "https://maps.app.goo.gl/62rexWbw6663aipCA",
    img: "src/assets/noesfarsa.jpg",
  },
  {
    nombre: "Weiss",
    direccion: "Rambla Gral. Artigas y El Foque Puerto",
    maps: "https://maps.app.goo.gl/6Fbhnr33Jwyx1Ttx5",
    img: "src/assets/weiss.jpg",
  },
  {
    nombre: "Farsa Burgers",
    direccion: "Roque Graseras 885A",
    maps: "https://maps.app.goo.gl/62rexWbw6663aipCA",
    img: "src/assets/noesfarsa.jpg",
  },
  {
    nombre: "Weiss",
    direccion: "Rambla Gral. Artigas y El Foque Puerto",
    maps: "https://maps.app.goo.gl/6Fbhnr33Jwyx1Ttx5",
    img: "src/assets/weiss.jpg",
  },
  {
    nombre: "Farsa Burgers",
    direccion: "Roque Graseras 885A",
    maps: "https://maps.app.goo.gl/62rexWbw6663aipCA",
    img: "src/assets/noesfarsa.jpg",
  },
  {
    nombre: "Weiss",
    direccion: "Rambla Gral. Artigas y El Foque Puerto",
    maps: "https://maps.app.goo.gl/6Fbhnr33Jwyx1Ttx5",
    img: "src/assets/weiss.jpg",
  },
  {
    nombre: "Farsa Burgers",
    direccion: "Roque Graseras 885A",
    maps: "https://maps.app.goo.gl/62rexWbw6663aipCA",
    img: "src/assets/noesfarsa.jpg",
  },
  {
    nombre: "Weiss",
    direccion: "Rambla Gral. Artigas y El Foque Puerto",
    maps: "https://maps.app.goo.gl/6Fbhnr33Jwyx1Ttx5",
    img: "src/assets/weiss.jpg",
  },
];

export default function Clients() {
  return (
    <div
      id="clientes"
      className="w-full bg-zinc-950 text-zinc-50 py-16 px-6 md:px-20 border-b-2 border-white"
    >
      <h2 className="font-oswald text-4xl font-extrabold mb-2 text-center">
        ¿Todavía no nos conocés?
      </h2>
      <p className="text-zinc-400 mb-10 text-center">
        Estas hamburgueserías eligen nuestro pan.
      </p>

      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {clients.map((client) => (
            <CarouselItem
              key={client.nombre}
              className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4"
            >
              <a
                href={client.maps}
                target="_blank"
                className="mx-3 border border-zinc-700 rounded-2xl flex flex-col gap-2 hover:border-zinc-400 transition"
              >
                <div className="w-full aspect-4/3 overflow-hidden rounded-2xl">
                  <img
                    src={client.img}
                    className="w-full h-full object-cover block"
                    alt={client.nombre}
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h4 className="font-oswald text-lg font-bold text-zinc-50">
                    {client.nombre}
                  </h4>
                  <p className="text-zinc-400 text-sm">{client.direccion}</p>
                  <span className="text-xs text-zinc-500 mt-auto">
                    Ver en Google Maps →
                  </span>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
