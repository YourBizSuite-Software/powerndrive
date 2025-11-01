import { useMemo, useState } from "react";
import VehicleCard from "../components/VehicleCard.jsx";
import { vehicles } from "../data/vehicles.js";

export default function Inventory() {
  const [q, setQ] = useState("");
  const [make, setMake] = useState("");
  const [body, setBody] = useState("");

  const makes = useMemo(() => Array.from(new Set(vehicles.map(v=>v.make))).sort(), []);
  const bodies = useMemo(() => Array.from(new Set(vehicles.map(v=>v.body))).sort(), []);

  const filtered = vehicles.filter(v => {
    const s = `${v.year} ${v.make} ${v.model} ${v.trim}`.toLowerCase();
    const matchesQ = s.includes(q.toLowerCase());
    const matchesMake = !make || v.make === make;
    const matchesBody = !body || v.body === body;
    return matchesQ && matchesMake && matchesBody;
  });

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-3 mb-6">
        <input
          className="border rounded-md px-3 py-2 flex-1 min-w-[220px]"
          placeholder="Search (e.g., Camry, 2019, AWD)…"
          value={q} onChange={e=>setQ(e.target.value)}
        />
        <select className="border rounded-md px-3 py-2" value={make} onChange={e=>setMake(e.target.value)}>
          <option value="">All Makes</option>
          {makes.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select className="border rounded-md px-3 py-2" value={body} onChange={e=>setBody(e.target.value)}>
          <option value="">All Body Styles</option>
          {bodies.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <button className="px-4 py-2 border rounded-md" onClick={()=>{setQ(""); setMake(""); setBody("");}}>
          Reset
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(c => <VehicleCard key={c.id} car={c} />)}
      </div>
      {filtered.length === 0 && <p className="text-gray-500 mt-8">No vehicles match your filters.</p>}
    </section>
  );
}