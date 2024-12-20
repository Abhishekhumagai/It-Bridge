import { useEffect } from "react";
import Router from "./Router";

import "aos/dist/aos.css";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
