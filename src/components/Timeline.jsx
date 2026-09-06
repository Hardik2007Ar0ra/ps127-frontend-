import React from 'react';
export default function Timeline({ path, plate }) {
  if (!plate) return <section className="panel empty-state"><span>⌁</span><h2>Trace a vehicle to reconstruct its route</h2><p>Search an ANPR plate to connect chronological camera sightings and assess the probable journey.</p></section>;
  const confidence = Math.round(path.reduce((sum,p) => sum+p.confidence,0)/path.length*100);
  return <section className="panel timeline"><div className="section-title"><div><p>RECONSTRUCTED JOURNEY · AUTO-REFRESH 10s</p><h2>{plate}</h2></div><span className="confidence">{confidence}% confidence</span></div><div className="steps">{path.map((p,index) => <article key={`${p.id}-${index}`} className={p.delay||'usual'}><span className="step-number">{index+1}</span><div><strong>{p.name}</strong><p>{new Date(p.timestamp).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} · {p.speed} km/h · {p.delay==='late'?'delayed':p.delay==='watch'?'slower than usual':'usual time'}</p></div><b>{Math.round(p.confidence*100)}%</b></article>)}</div></section>;
}
