// app/api/geocode/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { address } = await req.json();

    if (!address) {
      return NextResponse.json(
        { error: "Address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENCAGE_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}&limit=1`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(await response.text());
      return NextResponse.json(
        { error: "Upstream geocoding API failed." },
        { status: 502 }
      );
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return NextResponse.json(
        { error: "Could not geocode the given address." },
        { status: 404 }
      );
    }

    const { lat, lng } = data.results[0].geometry;

    if (typeof lat !== "number" || typeof lng !== "number") {
      return NextResponse.json(
        { error: "Invalid geocode response." },
        { status: 500 }
      );
    }

    return NextResponse.json({ lat, lng });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
