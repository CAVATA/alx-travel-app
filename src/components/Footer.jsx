import React from "react";

export default function Footer(){
  return (
    <footer style={{padding:"16px", textAlign:"center", borderTop:"1px solid #e6edf3", background:"#fff"}}>
      <small>© {new Date().getFullYear()} TravelApp — built with ❤️</small>
    </footer>
  );
}
