import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
