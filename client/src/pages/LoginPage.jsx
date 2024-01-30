import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);
  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      setUser(response.data);
      setRedirect(true);
      alert("Login successfull");
    } catch (error) {
      alert("Login failed.Invalid username or password.");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="mt-4 grow flex flex-col border justify-center ">
      <h1 className="text-3xl font-serif text-center pb-2 pt-2 ">Login</h1>
      <form className="max-w-md mx-auto mb-32" onSubmit={loginUser}>
        <input
          type="email"
          placeholder="mail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary">Login</button>
        <div className="p-1 text-center text-gray-500">
          Don't have an account yet ?{" "}
          <Link to="/register" className="underline text-black">
            Register now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
