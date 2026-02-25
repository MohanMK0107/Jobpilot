"use client";

import React, { FormEvent, useState } from "react";
import AuthForm from "@/src/components/AuthForm";

type AuthState = "Sign In" | "Sign Up";

const Page = () => {
  const [authState, setAuthState] = useState<AuthState>("Sign In");

  const isSignIn = authState === "Sign In";
  const isSignUp = authState === "Sign Up";

  const handleSubmit = (e: FormEvent) => {};

  return (
    <div className="flex items-center justify-center bg-gray-200 w-full h-full">
      {/* Auth Card */}
      <div
        className="relative shadow-xl bg-white rounded-2xl overflow-hidden
        md:w-[45vw] md:h-[70vh]
        lg:w-[55vw] lg:h-[55vh]
        xl:w-[60vw] xl:h-[65vh]
      "
      >
        {/* Sign In Form */}
        <div
          className={`absolute lg:top-0 lg:left-0 h-full w-full lg:w-1/2 px-12 lg:px-0 pt-18 lg:pt-0  ${
            authState === "Sign In"
              ? "lg:translate-x-0 lg:translate-y-0"
              : " -translate-y-[100%] lg:-translate-y-0 lg:-translate-x-[100%]   "
          } transition-transform duration-900 ease-in-out `}
        >
          <AuthForm authstate="Sign In" />
        </div>

        {/* Sign Up Form */}
        <div
          className={`absolute lg:top-0 lg:right-0 px-12 lg:px-0 pt-26 lg:pt-0  h-full w-full lg:w-1/2 ${
            authState === "Sign In"
              ? " translate-y-[100%] lg:translate-y-0 lg:translate-x-[100%] "
              : "translate-y-0 lg:translate-x-0 "
          } transition-transform duration-900 ease-in-out `}
        >
          <AuthForm authstate="Sign Up" />
        </div>

        {/* Moving Background Card */}
        <div
          className={`absolute bg-blue-500 transition-transform duration-1000 ease-in-out
            md:w-full md:h-[100vh]
            lg:w-[100vw] lg:h-full
            rounded-[100px] lg:rounded-[150px]
            ${
              isSignIn
                ? "translate-y-[60%] lg:translate-y-0 lg:translate-x-[27.5%] xl:translate-x-[30%]"
                : "-translate-y-[90%] lg:translate-y-0 lg:-translate-x-[72.5%] xl:-translate-x-[70%]"
            }
          `}
        />

        {/* Overlay Content */}
        <div
          className={`absolute flex lg:items-center w-full h-full items-end py-5 transition-transform duration-700 ease-in-out 
            lg:w-1/2 lg:top-0 lg:right-0
            ${
              isSignIn
                ? "lg:translate-x-0"
                : "-translate-y-[86%] lg:-translate-y-0 lg:-translate-x-full"
            }
          `}
        >
          <div className="flex w-full items-center justify-center gap-6 lg:flex-col">
            <div className="flex flex-col items-center text-center">
              <h1
                className="font-semibold text-white
                lg:text-[2rem] xl:text-[3rem]
              "
              >
                {isSignIn ? "Hello Friend!" : "Welcome"}
              </h1>

              <p
                className="text-white f-inter
                lg:text-lg xl:text-xl
              "
              >
                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
            </div>

            <button
              onClick={() => setAuthState(isSignIn ? "Sign Up" : "Sign In")}
              className="border-3 border-white text-white font-semibold cursor-pointer
                px-4 py-1
                rounded-2xl lg:rounded-full
                focus:outline-none
                lg:text-lg
                hover:scale-105 transition-all duration-300
              "
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
