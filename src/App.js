import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./screen/Home.jsx";
import NotFound from "./screen/NotFound.jsx";
import { useContext } from "react";
import DataContext from "./context/DataContext.js";
function App() {

  const { auth } = useContext(DataContext)
  return (
    <>
      <div className="lg:hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login auth={auth} />} />
          <Route path="/home" element={<Home auth={auth} />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
      <div className="max-lg:hidden h-screen flex items-center justify-center w-full">
        <div>open it in mobile device only</div>
      </div>
    </>
  );
}

export default App;
