import React, { useState } from "react";

export default function Planner({ addTrip }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState([{ day: 1, activities: ["Visit local market"] }]);

  function addDay(){
    setDays(prev => [...prev, { day: prev.length+1, activities: ["New activity"] }]);
  }
  function updateActivity(dayIndex, idx, value){
    const copy = [...days];
    copy[dayIndex].activities[idx] = value;
    setDays(copy);
  }
  function addActivity(dayIndex){
    const copy = [...days];
    copy[dayIndex].activities.push("New activity");
    setDays(copy);
  }
  function submit(e){
    e.preventDefault();
    const trip = {
      id: `trip-${Date.now()}`,
      title: title || `Trip ${Date.now()}`,
      dates:{start, end},
      budget: Number(budget) || 0,
      days
    };
    addTrip(trip);
  }

  return (
    <div>
      <section className="card">
        <h2>Trip Planner</h2>
        <p className="small">Build a simple itinerary and save it to your dashboard.</p>
      </section>

      <form className="card" onSubmit={submit}>
        <label className="small">Trip title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="3 days in ..." style={{width:"100%", padding:8, marginTop:6, marginBottom:12}} />

        <div style={{display:"flex", gap:8, marginBottom:12}}>
          <div style={{flex:1}}>
            <label className="small">Start date</label>
            <input type="date" value={start} onChange={e=>setStart(e.target.value)} style={{width:"100%", padding:8}} />
          </div>
          <div style={{flex:1}}>
            <label className="small">End date</label>
            <input type="date" value={end} onChange={e=>setEnd(e.target.value)} style={{width:"100%", padding:8}} />
          </div>
        </div>

        <label className="small">Budget (USD)</label>
        <input value={budget} onChange={e=>setBudget(e.target.value)} placeholder="Estimated budget" style={{width:"100%", padding:8, marginTop:6, marginBottom:12}} />

        <div>
          <h4>Days</h4>
          {days.map((d, di) => (
            <div key={di} style={{marginBottom:10, border:"1px dashed #e6eef6", padding:8, borderRadius:8}}>
              <div style={{fontWeight:600}}>Day {d.day}</div>
              {d.activities.map((a, ai) => (
                <input key={ai} value={a} onChange={e=>updateActivity(di, ai, e.target.value)} style={{width:"100%", marginTop:6, padding:8}} />
              ))}
              <div style={{marginTop:8}}>
                <button type="button" className="btn secondary" onClick={()=>addActivity(di)}>Add activity</button>
              </div>
            </div>
          ))}
          <div style={{marginTop:8}}>
            <button type="button" className="btn secondary" onClick={addDay}>Add day</button>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button className="btn" type="submit">Save Trip</button>
        </div>
      </form>
    </div>
  );
}
