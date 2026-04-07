export default function Contactanos() {
  return (
    <section
      id="contactanos"
      className="w-full h-auto bg-black border-b-2 border-white font-oswald"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-16 px-6 md:px-20 gap-16 ">
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="text-zinc-50 text-4xl font-extrabold">
              Contactate con Nosotros!
            </h2>
            <p className="text-zinc-400">
              Decinos que te gusto y/o que te gustaria ver en el futuro
            </p>
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

        <form className="col-span-1 border border-zinc-700 h-full rounded-2xl p-8">
          <h3 className="text-zinc-50 text-2xl mb-4">Mandanos un Mail</h3>
          <h4 className="text-zinc-50 mb-2">Nombre</h4>
          <input
            className="border border-zinc-700 mb-4 w-full"
            type="text"
            name="name"
            id=""
          />
          <h4 className="text-zinc-50 mb-2">Correo</h4>
          <input
            className="border border-zinc-700 mb-4 w-full"
            type="text"
            name="mail"
            id=""
          />
          <h4 className="text-zinc-50 mb-2">Mensaje</h4>
          <input
            className="border border-zinc-700 mb-4 w-full h-32"
            type="text"
            name="message"
            id=""
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              type="submit"
              className="col-span-1 border border-zinc-700 text-zinc-300 py-2 px-4 rounded-lg hover:border-zinc-500 hover:text-zinc-50 transition"
            >
              Enviar
            </button>

            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              className="col-span-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 transition text-white px-4 py-2 rounded-lg"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
