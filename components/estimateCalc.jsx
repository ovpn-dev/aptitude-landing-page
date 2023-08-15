import React, { useState } from "react";

function StuccoEstimateCalculator() {
  const ratePerSquareFoot = 2.15;
  const [squareFootage, setSquareFootage] = useState("");
  const [estimate, setEstimate] = useState("");

  const calculateEstimate = () => {
    const parsedSquareFootage = parseFloat(squareFootage);
    if (!isNaN(parsedSquareFootage)) {
      const totalEstimate = parsedSquareFootage * ratePerSquareFoot;
      setEstimate(`Total Estimate: $${totalEstimate.toFixed(2)}`);
    } else {
      setEstimate("Please enter a valid square footage.");
    }
  };

  return (
    <div className="relative flex flex-col my-10 items-center justify-center">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#14ff2c] to-[#493dff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="bg-white relative p-8 text-center rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Stucco Restoration and Paint Estimate Calculator
        </h1>
        <label htmlFor="squareFootage" className="mb-2">
          Enter Interior Square Footage:
        </label>
        <input
          type="number"
          id="squareFootage"
          placeholder="Enter square footage here..."
          value={squareFootage}
          onChange={(e) => setSquareFootage(e.target.value)}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500 mb-4"
          required
        />
        <button
          onClick={calculateEstimate}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none"
        >
          Calculate Estimate
        </button>
        <p className="mt-4">{estimate}</p>
      </div>
    </div>
  );
}

export default StuccoEstimateCalculator;
