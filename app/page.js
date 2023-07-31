"use client";

import { useState } from "react";
import axios from "axios";
import jobsiteLocations from "../data/locations";
import { Chat } from './components/chat'

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

export default function Home() {
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
            key: "Avk_H24dJEFyiHLK5_4kERsDWs0qNLCPEQGTkZ8nD1YBq8eikai-ih-e-Ox8M55n",
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
    <div>
      <h1 className="text-2xl font-semibold">Find Nearby Homes</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="address">Enter your address:</label>
          <input
            className="w-[400px] border border-black"
            id="address"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            type="text"
            placeholder="Type your address here"
          />
        </div>
        <button className="rounded-md bg-gray-400 text-gray-800 p-1 mt-2" type="submit">Show work of nearby homes</button>
      </form>

      {errorMessage && <p>Error: {errorMessage}</p>}

      {coordinates && (
        <p>
          Coordinates: Latitude {coordinates.latitude}, Longitude{" "}
          {coordinates.longitude}
        </p>
      )}

      {showLocations && (
        <div className="mt-2">
          <h2>Nearest Locations:</h2>
          <ul>
            {nearestLocations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      )}
      <Chat />
    </div>
  );
}
