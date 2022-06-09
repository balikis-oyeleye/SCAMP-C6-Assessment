import { useState } from "react";
import { Header, Sidebar, Carousel } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <main className="App">
        <Header setSidebar={setSidebar} />
        <section>
          <Carousel />
        </section>
      </main>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
