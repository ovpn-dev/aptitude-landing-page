"use client";

import { useState } from "react";
import axios from "axios";
import jobsiteLocations from "../data/locations";

const geolib = require("geolib");

const findNearestLocations = (referencePoint, locations, topN) => {
  const distances = locations.map((location) => {
    return {
      ...location,
      distance: geolib.getDistance(referencePoint, {
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    };
  });

  distances.sort((a, b) => a.distance - b.distance);

  return distances.slice(0, topN).map((location) => location.address);
};

export default function GeoHome() {
  const [userLocation, setUserLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [nearestLocations, setNearestLocations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);

  const topN = 5; // top 5 nearest locations

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message
    setCoordinates(null); // Reset coordinates
    setShowLocations(false); // Reset show locations flag
    setLoading(true); // Set loading state

    try {
      // Call your own API route instead of Bing Maps directly
      const response = await axios.post("/api/geocode", {
        address: userLocation,
      });

      const { coordinates: coords } = response.data;
      setCoordinates(coords);
      console.log("Latitude:", coords.latitude);
      console.log("Longitude:", coords.longitude);

      // Find the nearest locations using the geocoded user location
      const locations = findNearestLocations(coords, jobsiteLocations, topN);

      console.log(locations);
      setNearestLocations(locations);
      setShowLocations(true); // Display the locations on the page
    } catch (error) {
      console.error("Error:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Failed to geocode the provided address. Please enter a valid address.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false); // Reset loading state
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
            disabled={loading}
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
            className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search for completed jobs near you"}
          </button>
        </div>
      </form>

      {errorMessage && (
        <p className="mt-4 text-red-600">Error: {errorMessage}</p>
      )}

      {/* {coordinates && (
        <p>
          Coordinates: Latitude {coordinates.latitude}, Longitude{" "}
          {coordinates.longitude}
        </p>
      )} */}

      {showLocations && (
        <div className="mt-2">
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
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
