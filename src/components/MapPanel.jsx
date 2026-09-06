import React, { useEffect } from 'react';
import { Circle, CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet';
const colors = { low: '#2dd36f', medium: '#f5c518', high: '#ff4d5a' };
const segmentColor = segment => segment?.delay === 'late' ? '#ff4050' : segment?.delay === 'watch' ? '#f5c518' : '#2f8cff';
function MapResizer() {
  const map = useMap();
  useEffect(() => { const observer = new ResizeObserver(() => map.invalidateSize()); observer.observe(map.getContainer()); requestAnimationFrame(() => map.invalidateSize()); return () => observer.disconnect(); }, [map]);
  return null;
}
export default function MapPanel({ cameras, path, routeSegments, selectedCamera, onSelectCamera }) {
  return <section className="map-card panel"><div className="section-title"><div><p>LIVE CITY MAP</p><h2>{path.length ? 'Live probable trajectory' : 'Network traffic overview'}</h2></div><span className="live-dot">LIVE</span></div>
    <MapContainer center={[28.6139,77.209]} zoom={12} scrollWheelZoom className="map"><MapResizer/><TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {!path.length && cameras.filter(c=>c.traffic!=='low').map(c => <Circle key={c.id} center={c.coords} radius={c.traffic==='high'?1150:720} pathOptions={{color:colors[c.traffic],fillColor:colors[c.traffic],fillOpacity:c.traffic==='high'?.24:.14,weight:1}} />)}
      {path.length && routeSegments.map((segment,i) => <Polyline key={i} positions={segment.points} pathOptions={{color:segmentColor(segment),weight:7,opacity:.94}} />)}
      {cameras.map(c => <CircleMarker key={c.id} center={c.coords} radius={selectedCamera?.id===c.id?11:8} pathOptions={{color:'#fff',fillColor:colors[c.traffic],fillOpacity:1,weight:2}} eventHandlers={{click:()=>onSelectCamera(c)}}><Tooltip><strong>{c.name}</strong><br />{c.speed} km/h · {c.traffic} traffic</Tooltip></CircleMarker>)}
    </MapContainer><div className="legend">{path.length ? <><span><i className="blue"/>usual time</span><span><i className="yellow"/>slower than usual</span><span><i className="red"/>severely delayed</span></> : Object.entries(colors).map(([level,color])=><span key={level}><i style={{background:color}} />{level} traffic</span>)}</div></section>;
}
