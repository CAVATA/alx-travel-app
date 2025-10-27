import React, { useState } from "react";

export default function Profile({ user, setUser }) {
  const [name, setName] = useState(user?.name || "");

  function save(e) {
    e.preventDefault();
    setUser(prev => ({ ...prev, name }));
    alert("Profile saved locally.");
  }

  return (
    <div>
      <section className="card">
        <h2>Profile</h2>
        <p className="small">Manage your account and preferences (local only).</p>
      </section>

      <form className="card" onSubmit={save}>
        <label className="small">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} style={{width:"100%", padding:8, marginTop:6}} />
        <div style={{marginTop:12}}>
          <button className="btn" type="submit">Save Profile</button>
        </div>
      </form>
    </div>
  );
}
