import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Countries from "../src/pages/Countries";
import SingleCountry from "../src/pages/SingleCountry";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
      </Routes>
    </main>
  );
}

export default App;