export default function Nosotros() {
  return (
    <>
      <section
        id="nosotros"
        className="scroll-mt-28 w-full h-auto bg-black border-b-2 border-white flex flex-col items-center justify-center gap-10 text-zinc-50 font-oswald"
      >
        <img
          src="assets/dueños.webp"
          alt=""
          className=" h-[85vh] w-full object-cover"
        />
        <h1 className="text-5xl font-extrabold">SOMOS GORILLAZ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:px-10 mb-16">
          <Mision />
          <Vision />
        </div>
      </section>
    </>
  );
}

function Mision() {
  return (
    <div className="col-span-1 flex flex-col items-start justify-start gap-5 m-8">
      <h1 className="text-4xl font-bold w-full text-center">Mision</h1>
      <p className="font-light text-xl leading-relaxed px-8 text-justify">
        En Gorillaz hacemos el pan que tu hamburguesa se merece. Nos
        especializamos en panes de calidad — suaves, brioche, con queso —
        diseñados específicamente para la movida del fast food. Trabajamos con
        escala industrial sin perder el detalle en cada producto, porque sabemos
        que el pan no es un accesorio, es parte de la experiencia.
      </p>
    </div>
  );
}

function Vision() {
  return (
    <div className="col-span-1 flex flex-col items-start justify-start gap-5 m-8">
      <h1 className="text-4xl font-bold w-full text-center">Vision</h1>
      <p className="font-light text-xl leading-relaxed px-8 text-justify">
        Ser el proveedor de referencia para la escena del fast food en Uruguay.
        Queremos que detrás de cada smash burger, de cada sándwich que revienta
        en redes, haya un pan Gorillaz. Estamos creciendo rápido y recién
        estamos empezando.
      </p>
    </div>
  );
}
