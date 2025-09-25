import { Route, Routes } from "react-router-dom";
import IPhonePage from "./page/iPhone";
import Test from "./page/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IPhonePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
