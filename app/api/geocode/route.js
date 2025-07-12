// App Router version - app/api/geocode/route.js
import axios from "axios";

export async function POST(request) {
  const { address } = await request.json();

  if (!address) {
    return Response.json({ message: "Address is required" }, { status: 400 });
  }

  try {
    // Optional: Add a small delay to respect Nominatim's rate limits
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: address,
          format: "json",
          limit: 1,
        },
        headers: {
          "User-Agent":
            "Aptitude Associates/1.0 (office@aptitudeassociates.com)", // Required by Nominatim - replace with your details
        },
      }
    );

    if (response.data.length > 0) {
      const location = response.data[0];
      const coordinates = {
        latitude: parseFloat(location.lat),
        longitude: parseFloat(location.lon),
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
