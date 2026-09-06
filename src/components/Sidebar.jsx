import React from 'react';
const labels = { low: 'Clear', medium: 'Moderate', high: 'Congested' };
function Metric({ label, value }) { return <div><small>{label}</small><strong>{value}</strong></div>; }
export default function Sidebar({ camera, cameras, tracedPlate, path, onTrace }) {
  const active = camera || cameras[0];
  return <aside className="sidebar"><section className="panel details"><p className="eyebrow">CAMERA DETAILS</p><h2>{active.name}</h2><span className="muted">{active.id} · online</span>
    <div className="metrics"><Metric label="Vehicles/min" value={active.plates}/><Metric label="Avg. speed" value={`${active.speed} km/h`}/><Metric label="Status" value={labels[active.traffic]}/></div><div className={`status ${active.traffic}`}>{labels[active.traffic]} traffic</div></section>
    {tracedPlate && <section className="panel journey"><p className="eyebrow">TRAJECTORY SUMMARY</p><strong>{tracedPlate}</strong><div className="journey-stats"><span><b>{path.length}</b>sightings</span><span><b>{Math.max(path.length-1,0)*2.4} km</b>estimated</span><span><b>{Math.max(path.length-1,0)*9} min</b>elapsed</span></div><p className="muted">Ranked using ANPR confidence, sighting order, time, and road conditions.</p></section>}
    <section className="panel reads"><p className="eyebrow">RECENT PLATE READS</p>{['DL01AB1234','HR26CD5678','DL3CAB8901','UP16BW4471'].map((plate,i)=><button key={plate} onClick={()=>onTrace(plate)}><b>{plate}</b><span>{cameras[i].id} · {88-i*2}%</span></button>)}</section>
    <section className="panel camera-list"><p className="eyebrow">CAMERAS ({cameras.length})</p>{cameras.map(c => <div className="camera-row" key={c.id}><i className={c.traffic}/><span>{c.name}</span><small>{c.id}</small></div>)}</section></aside>;
}
