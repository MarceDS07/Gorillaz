const products = [
  {
    id: 1,
    tag: "Nuevo",
    title: "Nombre del producto",
    description:
      "Descripción breve del producto con sus características principales.",
    price: "$12.500",
    img: "src/assets/panes.webp",
  },
  {
    id: 2,
    tag: "Destacado",
    title: "Nombre del producto",
    description:
      "Descripción breve del producto con sus características principales.",
    price: "$8.900",
    img: "src/assets/catalanes.webp",
  },
  {
    id: 1,
    tag: "Nuevo",
    title: "Nombre del producto",
    description:
      "Descripción breve del producto con sus características principales.",
    price: "$12.500",
    img: "src/assets/panes.webp",
  },
  {
    id: 2,
    tag: "Destacado",
    title: "Nombre del producto",
    description:
      "Descripción breve del producto con sus características principales.",
    price: "$8.900",
    img: "src/assets/catalanes.webp",
  },
];

export default function ProductCards() {
  return (
    <section id="productos" className="px-6 md:px-20 py-8 bg-black font-oswald">
      <h2 className="text-4xl font-bold text-center md:text-left md:pl-8 text-zinc-50 mb-12">
        NUESTROS PANES
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {products.map((product) => (
          <div key={product.id} className="overflow-hidden flex flex-col">
            <div className="w-full aspect-4/3 overflow-hidden rounded-2xl border border-zinc-700">
              <img
                src={product.img}
                className="w-full h-full object-cover block"
                alt={product.title}
              />
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950 px-2 py-1 rounded w-fit">
                {product.tag}
              </span>
              <h3 className="text-base font-semibold text-zinc-100">
                {product.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                {product.description}
              </p>
              <p className="text-base font-bold text-zinc-100">
                [{product.price}]
              </p>
              <p className="text-sm text-zinc-400">Por unidad</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
