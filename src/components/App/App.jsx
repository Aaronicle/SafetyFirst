import "./App.css";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Footer from "../Footer/Footer";
import "../../vender/fonts/fonts.css";

import "./App.css";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);
  const handleCloseRegisterModal = () => setIsRegisterModalOpen(false);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__content">
          <Header
            onSignInClick={handleOpenLoginModal}
            onSignUpClick={handleOpenRegisterModal}
          />
          <Footer />
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleCloseLoginModal}
          />
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={handleCloseRegisterModal}
          />
          {/* <Main />
        <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
