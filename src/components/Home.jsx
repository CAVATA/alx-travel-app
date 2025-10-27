import React from "react";
import { Link } from "react-router-dom";

export default function Home({ addTrip, wishlist }) {
  function startSampleTrip(){
    addTrip({
      id: `trip-${Date.now()}`,
      title: "Weekend Nairobi Escape",
      days: [{ day:1, activities:["Nairobi National Park"] }],
      budget: 220,
      dates: { start: "2025-12-01", end: "2025-12-03" }
    });
  }

  return (
    <div>
      <section className="card">
        <h1>Explore the world — start planning your next trip</h1>
        <p className="small">Personalized inspiration and instant itinerary building.</p>
        <div style={{marginTop:12}} className="flex">
          <button className="btn" onClick={startSampleTrip}>Start Sample Trip</button>
          <Link to="/explore"><button className="btn secondary">Browse Destinations</button></Link>
        </div>
      </section>

      <section className="grid">
        <div className="card col-8">
          <h3>Recommended for you</h3>
          <p className="small">Smart suggestions based on your interests (mock).</p>
          <div style={{display:"grid", gap:8, marginTop:12}}>
            <div style={{padding:12, borderRadius:8, background:"#f8fafc"}}>Masai Mara — Wildlife & safari package</div>
            <div style={{padding:12, borderRadius:8}}>Mombasa — Beach & Swahili culture</div>
          </div>
        </div>

        <aside className="card col-4">
          <h4>Wishlist</h4>
          <p className="small">Saved places to visit ({wishlist.length})</p>
        </aside>
      </section>
    </div>
  );
}
