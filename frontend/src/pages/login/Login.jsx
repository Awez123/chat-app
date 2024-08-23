import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border border-gray-100">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 mb-10">
          LOGIN
          <span className=" text-violet-400"> RealChat</span>
        </h1>
        <form>
          <div className=" flex items-center justify-center flex-col">
            <label className="m-2">
              <input
                type="text"
                placeholder=" Username"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder=" Password"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Dont have an account ?</a>
            <div className="m-2 min-w-44">
            <button className="btn btn-outline w-full">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
