import React from "react";

export default function ItineraryItem({ trip }) {
  return (
    <div style={{border:"1px solid #eef2f6", padding:12, borderRadius:8, marginBottom:12}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <strong>{trip.title}</strong>
          <div className="small">{trip.dates?.start} → {trip.dates?.end} • Budget ${trip.budget}</div>
        </div>
      </div>

      <div style={{marginTop:8}}>
        {trip.days?.map(d => (
          <div key={d.day} style={{marginBottom:6}}>
            <div style={{fontWeight:600}}>Day {d.day}</div>
            <ul className="small">
              {d.activities.map((a,i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
