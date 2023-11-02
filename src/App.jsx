import DesignTools from "./components/DesignTools";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import JutsuLinks from "./components/JutsuLinks";
import CustomCodes from "./components/CustomCodes";
import { ToastContainer } from "react-toastify";
import ImageBoards from "./components/ImageBoards";
import Scorecard from "./components/Scorecard";
import Footer from "./components/Footer";
import Checklist from "./components/Checklist";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/jutsu/" element={<DesignTools />} />
        <Route path="/jutsu-links" element={<JutsuLinks />} />
        <Route path="/custom-codes" element={<CustomCodes />} />
        <Route path="/image-board" element={<ImageBoards />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/checklist" element={<Checklist />} />
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
