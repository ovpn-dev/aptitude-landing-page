// services/locationService.js
import axios from 'axios';

const geolib = require("geolib");

export const findNearestLocations = (referencePoint, locations, topN = 5) => {
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

  return distances.slice(0, topN).map((location) => ({
    address: location.address,
    distance: location.distance,
    distanceKm: (location.distance / 1000).toFixed(1),
    distanceMiles: (location.distance * 0.000621371).toFixed(1),
  }));
};

export const geocodeAddress = async (address) => {
  try {
    const response = await axios.post('/api/geocode', {
      address: address,
    });

    if (response.data.success) {
      return {
        success: true,
        coordinates: response.data.coordinates,
        formattedAddress: response.data.formattedAddress,
      };
    } else {
      return {
        success: false,
        error: response.data.error,
      };
    }
  } catch (error) {
    console.error('Geocoding service error:', error);
    return {
      success: false,
      error: 'Failed to geocode the provided address. Please try again.',
    };
  }
};