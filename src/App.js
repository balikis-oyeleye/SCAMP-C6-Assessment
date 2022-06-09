import { useState } from "react";
import { Header, Sidebar, Carousel, About } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <main className="App">
        <Header setSidebar={setSidebar} />
        <section className="flex flex-col md:flex-row">
          <Carousel />
          <About />
        </section>
      </main>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
