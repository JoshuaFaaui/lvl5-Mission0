import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import Blingsearch from "./pages/Blingsearch";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/lvl5-Mission0" element={<Home />} />
        <Route path="/lvl5-Mission0/Bingsearch" element={<Blingsearch />} />
      </Routes>
    </>
  );
}

export default App;
