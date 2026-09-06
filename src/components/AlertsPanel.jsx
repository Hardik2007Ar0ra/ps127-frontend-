import React from 'react';
export default function AlertsPanel({ alerts, onTrace }) {
  return <section className="panel alerts"><div className="section-title"><div><p>ANOMALY ALERTS</p><h2>Network watch</h2></div><span className="confidence">{alerts.length} active</span></div><div className="alert-list">{alerts.map((alert,i)=><article key={i} className={alert.level}><div><span>{alert.level}</span><strong>{alert.title}</strong></div><p>{alert.text}</p>{alert.plate&&<button onClick={()=>onTrace(alert.plate)}>{alert.plate}</button>} {alert.camera&&<small>{alert.camera}</small>}</article>)}</div></section>;
}
