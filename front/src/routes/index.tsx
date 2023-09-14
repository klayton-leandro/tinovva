import { Register } from 'pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutesComponents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
