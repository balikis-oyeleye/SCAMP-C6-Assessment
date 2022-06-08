import { useState } from "react";
import { Header, Sidebar, Carousel } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="App">
        <Header setSidebar={setSidebar} />
        <Carousel />
      </div>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
