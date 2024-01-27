import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex flex-col border justify-center ">
      <h1 className="text-3xl font-serif text-center pb-2 pt-2 ">Login</h1>
      <form className="max-w-md mx-auto mb-32">
        <input type="email" placeholder="mail@email.com" />
        <input type="password" placeholder="password" />
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
