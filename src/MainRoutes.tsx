
// src/MainRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "@/App";
import FAQ from "@/pages/Home/FAQ"; // adjust if path is different

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default MainRoutes;
