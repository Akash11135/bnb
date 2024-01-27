import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }
  return (
    <div className="mt-4 grow flex flex-col border justify-center ">
      <h1 className="text-3xl font-serif text-center pb-2 pt-2 ">Register</h1>
      <form className="max-w-md mx-auto mb-32" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Akash Pandey"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="email"
          placeholder="mail@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="primary">Register</button>
        <div className="p-1 text-center text-gray-500">
          Already a member ?{" "}
          <Link to="/login" className="underline text-black">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
