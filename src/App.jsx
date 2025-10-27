import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import Planner from "./components/Planner";
import Safari from "./components/Safari";
import Profile from "./components/Profile";
import { loadStorage, saveStorage } from "./utils/storage";
import mockData from "./data/mockData";

export default function App() {
  const [user, setUser] = useState(() => loadStorage("user") || { name: "Guest" });
  const [trips, setTrips] = useState(() => loadStorage("trips") || mockData.trips);
  const [wishlist, setWishlist] = useState(() => loadStorage("wishlist") || []);
  const navigate = useNavigate();

  useEffect(() => {
    saveStorage("user", user);
  }, [user]);

  useEffect(() => {
    saveStorage("trips", trips);
  }, [trips]);

  useEffect(() => {
    saveStorage("wishlist", wishlist);
  }, [wishlist]);

  // quick helper to add trip
  function addTrip(trip) {
    setTrips(prev => [trip, ...prev]);
    navigate("/dashboard");
  }

  return (
    <div className="app">
      <Header user={user} setUser={setUser} wishlist={wishlist} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home addTrip={addTrip} wishlist={wishlist} />} />
          <Route path="/explore" element={<Explore wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path="/dashboard" element={<Dashboard trips={trips} />} />
          <Route path="/planner" element={<Planner addTrip={addTrip} />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="*" element={<Home addTrip={addTrip} wishlist={wishlist} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
