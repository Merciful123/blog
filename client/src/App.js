import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
// import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Setting /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
