import ProductCards from "@/components/ui/card";

export default function Productos() {
  return (
    <>
      <section
        id="productos"
        className="scroll-mt-28 w-full h-auto bg-black border-b-2 border-white font-oswald font-medium text-zinc-50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 p-5 text-xl ">
          <div className="col-span-1 flex justify-center px-4 border-x border-zinc-700 mb-8">
            Ingeniería en Panificación para Gastronomía
          </div>
          <div className="col-span-1 flex justify-center px-4 border-x border-zinc-700 mb-8">
            Desarrollado para la Estética de la Burger Moderna
          </div>
          <div className="col-span-1 flex justify-center px-4 border-x border-zinc-700 mb-8">
            Producción Diaria: Frescura Garantizada en tu Local
          </div>
          <div className="col-span-1 flex justify-center px-4 border-x border-zinc-700 mb-8">
            Disponible para Envío Directo a tu Negocio
          </div>
        </div>

        <ProductCards />
      </section>
    </>
  );
}
