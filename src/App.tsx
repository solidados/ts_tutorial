import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App;
