import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Countries from "../src/pages/Countries";
import SingleCountry from "../src/pages/SingleCountry";
import FeedBack from "./components/FeedBack";
import About from "./components/About";
import TusharDetails from "./components/TusharDetails";
import MateusDetails from "./components/MateusDetails";
import ErrorPage from "./pages/ErrorPage";

const API_URL = "http://localhost:3000";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="country/:name" element={<SingleCountry />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/about" element={<About />} />
        <Route path="/tushar" element={<TusharDetails />} />
        <Route path="/mateus" element={<MateusDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
