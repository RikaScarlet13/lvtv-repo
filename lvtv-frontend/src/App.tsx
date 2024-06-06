import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Archives from "./pages/Archives";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import TeleRadio from "./pages/Teleradio";
import Profile from "./pages/Profile";
import Bab from "./pages/courses/Bab";
import BsisAct from "./pages/courses/BsisAct";
import BsaBsais from "./pages/courses/BsaBsais";
import Bssw from "./pages/courses/Bssw";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";

import "./output.css";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onLoginButtonClick = () => {
    console.log("Login button clicked!");
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/TeleRadio" element={<TeleRadio />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Archives" element={<Archives />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="courses/Bab" element={<Bab />} />
          <Route path="courses/BsisAct" element={<BsisAct />} />
          <Route path="courses/BsaBsais" element={<BsaBsais />} />
          <Route path="courses/Bssw" element={<Bssw />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
