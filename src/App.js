import { useState } from "react";
import { Header, Sidebar, Carousel, About, Cart } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <main className="App">
        <Header setSidebar={setSidebar} setCartOpen={setCartOpen} />
        <section className="flex flex-col md:flex-row md:gap-20 md:mt-10 md:container md:mx-auto absolute">
          <Carousel />
          <About />
          {cartOpen && <Cart />}
        </section>
      </main>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
