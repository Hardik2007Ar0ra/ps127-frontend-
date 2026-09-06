import React, { useState } from 'react';
export default function SearchBar({ onSearch, loading }) {
  const [plate, setPlate] = useState('');
  return <form className="search" onSubmit={e => { e.preventDefault(); if (plate.trim()) onSearch(plate.trim().toUpperCase()); }}>
    <label htmlFor="plate">Vehicle plate</label><input id="plate" value={plate} onChange={e => setPlate(e.target.value)} placeholder="e.g. DL01AB1234" />
    <button disabled={loading}>{loading ? 'Tracing…' : 'Trace trajectory'}</button>
  </form>;
}
