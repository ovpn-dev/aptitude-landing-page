"use client";

import { useState } from "react";
import jobsiteLocations from "../data/locations";

const geolib = require("geolib");

const findNearestLocations = (referencePoint, locations, topN) => {
  const distances = locations.map((location) => ({
    ...location,
    distance: geolib.getDistance(referencePoint, {
      latitude: location.latitude,
      longitude: location.longitude,
    }),
  }));

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

  const topN = 5;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setCoordinates(null);
    setShowLocations(false);
    setLoading(true);

    try {
      const response = await fetch("/api/geocode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: userLocation }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result?.error || "Something went wrong.");
        return;
      }

      const { lat, lng } = result;

      const referencePoint = { latitude: lat, longitude: lng };
      setCoordinates(referencePoint);

      const locations = findNearestLocations(
        referencePoint,
        jobsiteLocations,
        topN
      );

      setNearestLocations(locations);
      setShowLocations(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Something went wrong. Please enter a valid address and try again."
      );
    } finally {
      setLoading(false);
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
            className="block w-full p-4 pl-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address here..."
            required
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-2 disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search for completed jobs near you"}
          </button>
        </div>
      </form>

      {errorMessage && (
        <p className="mt-3 text-sm text-red-600">Error: {errorMessage}</p>
      )}

      {loading && (
        <p className="mt-3 text-sm text-gray-700">Fetching location...</p>
      )}

      {showLocations && (
        <div className="mt-5">
          <h2 className="text-md font-semibold text-center tracking-tight text-gray-900 sm:text-md">
            We are excited to showcase our expertise through real-life examples
            — the following homes were recently restored and painted by our
            company:
          </h2>
          <ul className="mt-4">
            {nearestLocations.map((location, index) => (
              <li
                key={index}
                className="text-md font-medium text-center text-gray-800"
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
