import { useState } from "react";

const Form = () => {
  // Step 1: Initialize state for the input value
  const [inputValue, setInputValue] = useState("Loading...");

  // Step 2: Update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="w-full lg:w-1/2 lg:mx-auto mt-12 h-[74px] border-2 border-slate-100 flex justify-between rounded-2xl">
      {/* Step 3: Set the input's value to the state */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 rounded focus:outline-none w-full"
      />
      <button className="w-[74px] h-[74px] bg-[#FFBE2E] rounded-lg flex justify-center items-center">
        <img src="/images/vector-black.png" alt="submit" className="w-6 h-4" />
      </button>
    </form>
  );
};

export default Form;
