import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Ai = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
//   useEffect(() => {
//     setPrevLocation(location.state.data);
//   }, [location]);

  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) {
      setErrorMessage("Please provide your input.");
    } else {
      simulateAiProcessing(userInput);
    }
  };

  const simulateAiProcessing = (input) => {
    setTimeout(() => {
      setSuccessMessage(`AI processed: "${input}"`);
      setUserInput("");
    }, 1000);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="AI Prompt" prevLocation={prevLocation} />
      {successMessage ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMessage}</p>
      ) : (
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">AI Prompt Interface</h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">User Input</p>
              <input
                onChange={handleChange}
                value={userInput}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your input here"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errorMessage}
                </p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Ai;
