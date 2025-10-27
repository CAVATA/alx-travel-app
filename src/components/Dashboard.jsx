import React from "react";
import ItineraryItem from "./ItineraryItem";

export default function Dashboard({ trips=[] }) {
  return (
    <div>
      <section className="card">
        <h2>Your Trips</h2>
        <p className="small">Overview of upcoming and saved trips.</p>
      </section>

      <section className="grid">
        <div className="col-8 card">
          {trips.length === 0 ? <p>No trips yet — create one in Planner.</p> : trips.map(t => (
            <ItineraryItem key={t.id} trip={t} />
          ))}
        </div>

        <aside className="col-4 card">
          <h4>Trip Tools</h4>
          <ul className="small">
            <li>Download itinerary (PDF) — placeholder</li>
            <li>Currency converter — integrate API</li>
            <li>Weather forecast widget — integrate API</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
