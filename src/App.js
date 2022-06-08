import { useState } from "react";
import { Header, Sidebar } from "./components";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="App container mx-auto">
        <Header setSidebar={setSidebar} />
      </div>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
}

export default App;
