// app/api/geocode/route.js (for App Router)

import axios from "axios";

export async function POST(request) {
  const { address } = await request.json();

  if (!address) {
    return Response.json({ message: "Address is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      "https://dev.virtualearth.net/REST/v1/Locations",
      {
        params: {
          query: address,
          key: process.env.BING_MAPS_API_KEY,
        },
      }
    );

    if (response.data.resourceSets[0].resources.length > 0) {
      const location =
        response.data.resourceSets[0].resources[0].point.coordinates;
      const coordinates = {
        latitude: location[0],
        longitude: location[1],
      };

      return Response.json({ coordinates });
    } else {
      return Response.json(
        {
          message:
            "Failed to geocode the provided address. Please enter a valid address.",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Geocoding error:", error);
    return Response.json(
      {
        message:
          "Failed to geocode the provided address. Please enter a valid address.",
      },
      { status: 500 }
    );
  }
}

// If using Page Router (app/api/geocode/route.js), use this instead:
/*
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ message: "Address is required" });
  }

  try {
    const response = await axios.get(
      "https://dev.virtualearth.net/REST/v1/Locations",
      {
        params: {
          query: address,
          key: process.env.BING_MAPS_API_KEY, // Environment variable
        },
      }
    );

    if (response.data.resourceSets[0].resources.length > 0) {
      const location =
        response.data.resourceSets[0].resources[0].point.coordinates;
      const coordinates = {
        latitude: location[0],
        longitude: location[1],
      };

      return res.status(200).json({ coordinates });
    } else {
      return res.status(404).json({
        message:
          "Failed to geocode the provided address. Please enter a valid address.",
      });
    }
  } catch (error) {
    console.error("Geocoding error:", error);
    return res.status(500).json({
      message:
        "Failed to geocode the provided address. Please enter a valid address.",
    });
  }
}
*/
