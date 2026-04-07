import "./App.css";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Productos from "@/components/ui/productos";
import Nosotros from "@/components/ui/nosotros";
import Clientes from "@/components/ui/clientes";
import Contactanos from "@/components/ui/contactanos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Productos />
      <Clientes />
      <Nosotros />
      <Contactanos />
    </>
  );
}

export default App;
