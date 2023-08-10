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

  const topN = 5; // top 5 nearest locations

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message
    setCoordinates(null); // Reset coordinates
    setShowLocations(false); // Reset show locations flag

    try {
      const response = await axios.get(
        "https://dev.virtualearth.net/REST/v1/Locations",
        {
          params: {
            query: userLocation,
            key: "ArE0RWAv3FDYZQs-il5HaTtWH2BLQraBH0sMGFf99zxeOCe2wGtIXlHyebKBGXU3",
          },
        }
      );

      if (response.data.resourceSets[0].resources.length > 0) {
        const location =
          response.data.resourceSets[0].resources[0].point.coordinates;
        const referencePoint = {
          latitude: location[0],
          longitude: location[1],
        };
        setCoordinates(referencePoint);
        console.log("Latitude:", location[0]);
        console.log("Longitude:", location[1]);

        // Find the nearest locations using the geocoded user location
        const locations = findNearestLocations(
          referencePoint,
          jobsiteLocations,
          topN
        );

        console.log(locations);
        setNearestLocations(locations);
        setShowLocations(true); // Display the locations on the page
      } else {
        setErrorMessage(
          "Failed to geocode the provided address. Please enter a valid address."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "Failed to geocode the provided address. Please enter a valid address."
      );
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-12 text-center ">
      <h1 className="text-2xl font-semibold px-5 py-5">
        See our work for yourself!
      </h1>
      <h3 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Simple enter your address to see homes we have completed nearby.
      </h3>
      <form onSubmit={handleSubmit}>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="address"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your address here..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search nearby homes
          </button>
        </div>
      </form>

      {errorMessage && <p>Error: {errorMessage}</p>}

      {/* {coordinates && (
        <p>
          Coordinates: Latitude {coordinates.latitude}, Longitude{" "}
          {coordinates.longitude}
        </p>
      )} */}

      {showLocations && (
        <div className="mt-2">
          <h2 className=" text-md font-semibold text-center  tracking-tight text-gray-900 sm:text-md">
            We are excited to showcase our expertise through real-life examples,
            the following homes were recently restored and painted by our
            company:
          </h2>
          <br />
          <ul>
            {nearestLocations.map((location, index) => (
              <li
                key={index}
                className=" text-md font-semibold text-center  tracking-tight text-gray-900 sm:text-md"
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
