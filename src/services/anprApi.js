const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export async function searchPlate(plate) {
  const response = await fetch(`${baseUrl}/search/plate/${encodeURIComponent(plate)}`);
  if (!response.ok) throw new Error('The live ANPR service is unavailable');
  return (await response.json()).results;
}

// OSRM uses OpenStreetMap road data and returns a road-following GeoJSON line.
export async function getRoadRoute(from, to) {
  const points = `${from[1]},${from[0]};${to[1]},${to[0]}`;
  const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${points}?overview=full&geometries=geojson`);
  if (!response.ok) throw new Error('OSM routing unavailable');
  const route = (await response.json()).routes?.[0];
  return route ? route.geometry.coordinates.map(([lng, lat]) => [lat, lng]) : [from, to];
}
