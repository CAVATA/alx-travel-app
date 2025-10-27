import React from "react";
import mockData from "../data/mockData";

export default function Safari(){
  return (
    <div>
      <section className="card">
        <h2>Safari & Wildlife</h2>
        <p className="small">Wildlife tracker and recommended conservancies (mock data).</p>
      </section>

      <section className="grid">
        <div className="col-8 card">
          <h3>Recent Sightings</h3>
          <ul style={{marginTop:12}}>
            {mockData.animals.map(a => (
              <li key={a.id} style={{padding:8, borderBottom:"1px solid #eef2f6"}}>
                <strong>{a.name}</strong>
                <div className="small">{a.info}</div>
              </li>
            ))}
          </ul>
          <div style={{marginTop:12}}>
            <p className="small">Connect with verified local guides — integration TODO.</p>
          </div>
        </div>

        <aside className="col-4 card">
          <h4>Eco Tips</h4>
          <p className="small">Respect wildlife distances, hire local guides, pack reusable water bottles.</p>
        </aside>
      </section>
    </div>
  );
}
