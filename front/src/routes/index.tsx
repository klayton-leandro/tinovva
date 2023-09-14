import { Register } from "pages";
import { ListRegister } from "pages/ListRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutesComponents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/registers" element={<ListRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
