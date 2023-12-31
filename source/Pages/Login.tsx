
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
   matricnumber:"",
    password:""
  });

  const [formSuccessMessage, setFormSuccessMessage] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = (e:any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't want the page to refresh
    e.preventDefault()
    setIsLoading(true)
    console.log({isLoading})
  
    const formURL = "https://www.formbackend.com/f/aa6d541dbddfeb69"
    const data = new FormData()
  
    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })
  
    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
   
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        matricnumber:"",
        password:"",
       
      })
      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
      setIsLoading(false)
    })
  }

  return (
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6  my-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-[#d8a642]">
          Welcome Back
        </h1>
          {formSuccess ? 
        <div>{formSuccessMessage}</div> 
        : 
          <form className="mt-6" onSubmit={submitForm} >
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800" >
              Matric Number
            </label>
              <input
                type="text"
                name='matricnumber'
                onChange={handleInput}
                value={formData.matricnumber}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
            <label className="block text-sm font-medium text-gray-800" >
              Password
            </label>
              <input
                type="email"
                name='password'
                onChange={handleInput}
                value={formData.password}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
            <Link
            href="/resetpassword"
            className="text-xs text-[#d8a642] hover:underline"
          >
            Forgot Password?
          </Link>
            </div>
            <div className="mb-2">
            <Link href="/candidates">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600"
              >
                {isLoading ? "please wait" : "Login"}
              </button>
              </Link>
            </div>
          </form>
             }
        <p className="mt-7 text-sm text-center text-gray-700">
          Or Login With Your Google Account
        </p>

        <div className="flex mt-4 gap-x-1">
          <button
            type="button"
            className="flex items-center justify-center w-full tracking-wide p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
          {/* </Link> */}
        </div>
        <p className="mt-4 text-sm text-center text-gray-700">
          Dont have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#d8a642] hover:underline"
          >
            Sign up
          </Link>
        </p>
          </div>
      </div>
    );
};
export default Login;
