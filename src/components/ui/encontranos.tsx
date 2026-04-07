import Clientes from "./clientes";

export default function Encontranos() {
  return (
    <>
      <section
        id="donde-encontrarnos"
        className="w-full h-auto bg-black border-b-2 border-white font-oswald text-zinc-50 flex flex-col items-center justify-center py-16 px-6 md:px-20"
      >
        <Clientes />
        <div className="border rounded-2xl w-auto h-auto flex flex-col items-center justify-center p-16 mt-16 border-zinc-700">
          <p className="text-zinc-50 text-3xl mb-12 font-oswald font-bold">
            Visita Nuestra Fábrica
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center text-center">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-oswald text-xl font-bold mb-1">
                  Dirección
                </h3>
                <p className="text-zinc-400">Calle Falsa 123, Montevideo</p>
              </div>

              <div>
                <h3 className="font-oswald text-xl font-bold mb-1">Horarios</h3>
                <p className="text-zinc-400">Lunes a viernes — 7:00 a 20:00</p>
                <p className="text-zinc-400">Sábados — 7:00 a 14:00</p>
                <p className="text-zinc-400">Domingos — cerrado</p>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 transition text-white font-bold px-6 py-3 rounded-xl"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>

            <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=TU_EMBED_URL_ACA"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="border-t mb-16" />
      </section>
    </>
  );
}
