import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Archives from "./Pages/Archives";
import OurStory from "./Pages/OurStory";
import Home from "./Pages/Home";
import TeleRadio from "./Pages/Teleradio";
import Profile from "./Pages/Profile";
import Bab from "./Pages/courses/Bab";
import BsisAct from "./Pages/courses/BsisAct";
import BsaBsais from "./Pages/courses/BsaBsais";
import Bssw from "./Pages/courses/Bssw";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQs from "./Pages/FAQs";

// import "../css/output.css";
import { useState } from "react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});

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
