
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import "./assets/style.css";


const App = () => {
  return (
    <div>
      

     {/* BorowserRouter and HashRouter */}
     {/* navigate korar somoy kichu data pass karar jonno 3 ta step. 1) route er path er moddhe / clone : use kore akta keyword 2) je page e jabe sei page e {} object er maddhome receive kora 3) Menu.jsx e  value declear kora  */}

      <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id/:name" element={<ProductPage />} />
            <Route path="/profile/:facebookID/:YouTubeID" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;