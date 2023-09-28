import { NextResponse } from "next/server";
const BASE_URL = " https://api.mapbox.com/search/searchbox/v1/suggest";
export async function GET(request: any) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get("q");
  const response = await fetch(
    BASE_URL +
      "?q=" +
      search +
      "?language=en&limit=6&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363" +
      "&access_token=" +
      process.env.MAPBOX_ACCESS_TOKEN
  );
  const searchResult = await response.json();
  return NextResponse.json(searchResult);
}
