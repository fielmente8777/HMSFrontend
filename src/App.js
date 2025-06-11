import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./screen/Home.jsx";
import NotFound from "./screen/NotFound.jsx";
import { useContext, useEffect } from "react";
import DataContext from "./context/DataContext.js";
import Feedback from "./screen/Feedback.jsx";
import Thanks from "./screen/Thanks.jsx";
import ProtectedRoute from "./protected/ProtectedRoute.jsx";
function App() {
  const navigate = useNavigate();

  const { auth } = useContext(DataContext);
  const userNoLongerExists = localStorage.getItem("hasDoneFeedback");

  useEffect(() => {
    if (userNoLongerExists === "true") {
      navigate("/thanks");
    }
  }, [navigate, userNoLongerExists]);

  console.log(userNoLongerExists);
  return (
    <>
      <div className="lg:hidden">
        {!userNoLongerExists || userNoLongerExists === "false" ? (
          <>
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path=":name/:locationName/:grmid" element={<Login auth={auth} />} />
              </Route>

              {/* <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login auth={auth} />} /> */}
              <Route path="/home" element={<Home auth={auth} />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/thanks" replace />} />
            <Route path="*" element={<Navigate to="/thanks" replace />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        )}
      </div>
      <div className="max-lg:hidden h-screen flex items-center justify-center w-full">
        <div>open it in mobile device only</div>
      </div>
    </>
  );
}

export default App;
