import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./screen/Home.jsx";
import { useContext } from "react";
import DataContext from "./context/DataContext.js";
function App() {
  const { auth, setAuth } = useContext(DataContext);

  return (
    <>
      <div className="lg:hidden">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {/* {window.location.pathname == "/login" ? "" : <Footer />} */}

        {/* } */}
      </div>
      <div className="max-lg:hidden h-screen flex items-center justify-center w-full">
        <div>open it in mobile device only</div>
      </div>
    </>
  );
}

export default App;
