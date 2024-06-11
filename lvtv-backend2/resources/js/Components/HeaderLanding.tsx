import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";

const HeaderLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen((prevState) => !prevState); // Toggles the modal state
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    window.google.accounts.id.prompt();
    window.location.href = "https://accounts.google.com/logout";
    window.google.accounts.id.revoke(() => {
      console.log("User signed out.");
    });
  };

  return (
    <header className="bg-header">
      <nav className="flex justify-between items-center 2-[92%] mx-auto">
        <div>
          <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
        </div>
        <div>
          <button
            className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-5 hover:text-white hover:bg-blue-300"
            onClick={handleLoginButtonClick}
          >
            Log In
          </button>
        </div>
      </nav>
      <div className="w-full bg-yellow-400 text-black px-10">
        <div className="flex justify-center">
          <ul className="flex text-center gap-[4vw] my-2">
            <li>
              <NavLink className="text-xl hover:text-white" to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:text-white" to="/OurStory">
                Our Story
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {isLoginModalOpen && (
        <LogIn isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      )}
    </header>
  );
};

export default HeaderLanding;
