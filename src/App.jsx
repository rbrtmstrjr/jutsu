import DesignTools from "./assets/components/DesignTools";
import { Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import JutsuLinks from "./assets/components/JutsuLinks";
import CustomCodes from "./assets/components/CustomCodes";
import { ToastContainer } from "react-toastify";
import ImageBoards from "./assets/components/ImageBoards";
import Scorecard from "./assets/components/Scorecard";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DesignTools />} />
        <Route path="/jutsu-links" element={<JutsuLinks />} />
        <Route path="/custom-codes" element={<CustomCodes />} />
        <Route path="/image-board" element={<ImageBoards />} />
        <Route path="/scorecard" element={<Scorecard />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}
