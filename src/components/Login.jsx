import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userNameValue, setUserName] = useState("");
  const [passwordValue, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Save to local storage
    const userCredentials = {
      username: userNameValue,
      password: passwordValue,
    };

    // Save to local storage
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));


    // Simulate a login process
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful");
      navigate('/dashboard');
    }, 1000); // Simulate a network request
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-[#fff] p-5 rounded-xl w-[30rem]">
        <div className="text-[2.2rem] text-[#474747] font-semibold text-center mb-2">
          Login form
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className={`username`}>
              <label
                className="text-skin-primary text-[1.2rem] font-semibold mb-2"
                htmlFor="phoneNumberInput"
              >
                Username
              </label>
              <input
                type="text"
                id="userNameInput"
                className="w-full p-2 rounded text-[1.3rem] focus:outline-none text-skin-white bg-[#cfd4d8]"
                placeholder="username"
                onChange={handleUserNameChange}
                required
              />
            </div>

            <div className={`password`}>
              <label
                className="text-skin-primary text-[1.2rem] font-semibold mb-2"
                htmlFor="phoneNumberInput"
              >
                Password
              </label>
              <input
                type="password"
                id="passwordInput"
                className="w-full p-2 rounded text-[1.3rem] focus:outline-none text-skin-white bg-[#cfd4d8]"
                placeholder="password"
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 px-4 uppercase font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-lg text-white focus:outline-none mt-4"
          >
            {isLoading ? "Please wait..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
