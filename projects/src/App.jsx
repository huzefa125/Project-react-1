import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

  );
}
export default App;
