import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "@pages/layout";
import Home from "@pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
