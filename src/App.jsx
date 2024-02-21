import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Countries from "../src/pages/Countries";
import SingleCountry from "../src/pages/SingleCountry";
import Comments from "./components/Comments";
import Navbar from "./components/NavBar";
import FeedBack from "./components/FeedBack";

const API_URL = "http://localhost:3000";

function App() {
  return (
    <main>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/:name" element={<SingleCountry />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </main>
  );
}

export default App;