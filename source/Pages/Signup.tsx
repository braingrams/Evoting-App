"use client";

import Link from "next/link";
import React, { useState} from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    matricnumber:"",
     password:"",
     name:"",
     email:""
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
         name:"",
         email:""
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
          Register To Vote
        </h1>
        {formSuccess ? 
        <div>{formSuccessMessage}</div> 
        : 
          <form className="mt-6" onSubmit={submitForm} >
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="name"
              name='name'
              onChange={handleInput}
              value={formData.name}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-medium text-gray-800"
            >
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
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="text"
              name='email'
              onChange={handleInput}
              value={formData.email}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name='password'
              onChange={handleInput}
              value={formData.password}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-8">
            <Link href="/candidates">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600">
                Sign up
              </button>
            </Link>
          </div>
        </form>
          }
        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#d8a642] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
