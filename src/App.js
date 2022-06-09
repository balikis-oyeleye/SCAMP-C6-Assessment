import { useState } from "react";
import { Header, Sidebar, Carousel, About } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <main className="App">
        <Header setSidebar={setSidebar} />
        <section className="flex flex-col md:flex-row md:gap-20 md:mt-10 md:container md:mx-auto">
          <Carousel />
          <About />
        </section>
      </main>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
