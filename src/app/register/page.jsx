/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from 'react';
import Link from "next/link";
import { useUser } from "../../../context/UserContext";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    const { user } = useUser(); 
    const { setUser } = useUser();


    const handleSignUp = async (event) => {
        event.preventDefault();
      
        const newUser = {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
          role: 'member'
        };
      
        try {
          const resp = await fetch("http://localhost:3000/register/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (resp.status === 201) {  // Updated to handle 201 Created
            setUser(newUser); // Save the user details in context
            toast.success("SignUp Successfully!");
            
            event.target.reset();
      
            // Redirect after 2 seconds
            setTimeout(() => {
              router.push("/");
            }, 2000);
            
          } else if (resp.status === 409) {  // Handle user already exists
            toast.error("User already exists!");
            
          } else {
            const errorData = await resp.json();
            toast.error(errorData.message || "Something went wrong!");
          }
        } catch (error) {
          console.error("Error during sign up:", error);
          toast.error("An unexpected error occurred.");
        }
      };
      


    return (
        <div className="container  px-5 lg:px-24 mx-auto py-5 pt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <div className="border-2 bg-violet-200 px-12 py-5 border-violet-500 rounded-md">
            <h6 className="text-5xl font-semibold text-[#1a1357] text-center mb-8">
              Sign Up
            </h6>
  
  
            <form onSubmit={handleSignUp}  action="">
                                                                                                         
  
              <label className="text-black" htmlFor="email">Name</label> <br />
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="w-full px-3 py-2 border-b-[#b14f25] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
                 required />
              <br /> <br />
              <label className="text-black" htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="w-full px-3 py-2 border-b-[#bd5224] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
                 required />
              <br /> <br />
              <label className="text-black" htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="w-full px-3 py-2 border-b-[#a7451c] rounded-md border-b-2 focus:border-2 focus:border-[#18100c] focus:outline-none bg-transparent text-black text-lg"
                required />
              <br />
              <button
                type="submit"
                className="w-full btn btn-primary bg-[#9a4c2b] mt-8 text-lg border-none"
              >
                Sign Up
              </button>
            </form>
            <div>
             
              <h6 className="mt-5 mb-5 text-center text-black">
                Already have account ?{" "}
                <Link className="text-[#3b4ce8] font-semibold text-xl ml-2" href={"/login"}>
                  Sign In
                </Link>
              </h6>
            </div>
          </div>
  
          <div className="text-center flex flex-col justify-center items-center gap-5">
                            <h1 className="text-6xl mt-5 text-black text-center font-bold pb-1">Login!</h1>
                            
                            <Link href={"/login"}><button className="btn hover:bg-white hover:text-black hover:border-2  bg-black text-white font-semibold text-xl">Login</button></Link>
                            
                        </div>
  
        </div>
      <Toaster></Toaster> 
      </div>

    );
};

export default page;