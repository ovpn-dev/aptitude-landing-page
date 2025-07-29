"use client";

import { useState } from "react";
import jobsiteLocations from "../data/locations";
import { geocodeAddress, findNearestLocations } from "../services/locationService";

export default function GeoHome() {
  const [userLocation, setUserLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [nearestLocations, setNearestLocations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const topN = 5; // top 5 nearest locations

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setCoordinates(null);
    setShowLocations(false);
    setIsLoading(true);

    try {
      const geocodingResult = await geocodeAddress(userLocation);

      if (geocodingResult.success) {
        const referencePoint = geocodingResult.coordinates;
        setCoordinates(referencePoint);
        
        console.log("Latitude:", referencePoint.latitude);
        console.log("Longitude:", referencePoint.longitude);
        console.log("Formatted Address:", geocodingResult.formattedAddress);

        // Find the nearest locations using the geocoded user location
        const locations = findNearestLocations(
          referencePoint,
          jobsiteLocations,
          topN
        );

        console.log(locations);
        setNearestLocations(locations);
        setShowLocations(true);
      } else {
        setErrorMessage(geocodingResult.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-12 text-center">
      <h1 className="text-2xl font-semibold px-5 py-5">
        See our work for yourself!
      </h1>
      <h3 className="mb-2 text-sm font-medium text-gray-900">
        Simply enter your address to see homes we have completed nearby.
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            id="address"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            className="block w-full p-4 pl-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your address here..."
            required
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Search for completed jobs near you"}
          </button>
        </div>
      </form>

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {errorMessage}
        </div>
      )}

      {showLocations && (
        <div className="mt-6">
          <h2 className="text-md font-semibold text-center tracking-tight text-gray-900 sm:text-md">
            We are excited to showcase our expertise through real-life examples,
            the following homes were recently restored and painted by our
            company:
          </h2>
          <br />
          <ul>
            {nearestLocations.map((location, index) => (
              <li
                key={index}
                className="text-md font-semibold text-center tracking-tight text-gray-900 sm:text-md"
              >
                {location.address} ({location.distanceKm} km)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}