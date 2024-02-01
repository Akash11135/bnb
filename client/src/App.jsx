import IndexPage from "./pages/indexPage.jsx";
import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import PlacesPage from "./pages/PlacesPage.jsx";
import NotfoundPage from "./NotfoundPage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="account" element={<AccountPage />}>
              <Route index element={<AccountPage />} />
              <Route path=":subpage" element={<AccountPage />} />
              <Route path=":subpage/:action" element={<AccountPage />} />
            </Route>
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
