import "./App.css";
import { Section1 } from "./Components/Section1/section1";
import { Section2 } from "./Components/Section2/section2";
import { Topbar } from "./Components/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
