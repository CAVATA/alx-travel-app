import React from "react";
import mockData from "../data/mockData";

export default function Explore({ wishlist, setWishlist }) {
  function toggleWishlist(dst) {
    const exists = wishlist.find(w => w.id === dst.id);
    if (exists) setWishlist(wishlist.filter(w => w.id !== dst.id));
    else setWishlist([dst, ...wishlist]);
  }

  return (
    <div>
      <section className="card">
        <h2>Explore destinations</h2>
        <p className="small">Filter by interest: Safari, Beach, City, Culture</p>
      </section>

      <section className="grid">
        <div className="col-8 card">
          <h3>Destinations</h3>
          <div style={{display:"grid", gap:10, marginTop:12}}>
            {mockData.destinations.map(dst => (
              <div key={dst.id} style={{display:"flex", justifyContent:"space-between", padding:12, borderRadius:8, background:"#fff", border:"1px solid #eef2f6"}}>
                <div>
                  <strong>{dst.title}</strong>
                  <div className="small">{dst.type} — {dst.summary}</div>
                </div>
                <div style={{display:"flex", gap:8}}>
                  <button className="btn secondary" onClick={()=>toggleWishlist(dst)}>
                    {wishlist.find(w => w.id === dst.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="col-4 card">
          <h4>Map</h4>
          <div className="small">Map placeholder — integrate Google/Mapbox here.</div>
        </aside>
      </section>
    </div>
  );
}
