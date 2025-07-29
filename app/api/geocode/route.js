// app/api/geocode/route.js (for App Router)
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { address } = await request.json();

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      );
    }

    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: process.env.GOOGLE_GEOCODING_API_KEY, // Store your API key in environment variables
      },
    });

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      const coordinates = {
        latitude: location.lat,
        longitude: location.lng,
      };

      return NextResponse.json({
        success: true,
        coordinates,
        formattedAddress: response.data.results[0].formatted_address,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to geocode the provided address. Please enter a valid address.',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to geocode the provided address. Please try again.',
      },
      { status: 500 }
    );
  }
}