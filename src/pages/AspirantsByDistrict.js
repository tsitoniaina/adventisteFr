// 📄 src/pages/AspirantsByDistrict.js
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AspirantsByDistrict() {
  const [aspirants, setAspirants] = useState([]);

  useEffect(() => {
    api.get("/aspirants/district")
      .then(res => setAspirants(res.data))
      .catch(err => console.error("Erreur chargement aspirants:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👥 Aspirants de mon district</h2>
      {aspirants.length === 0 ? (
        <p>Aucun aspirant trouvé.</p>
      ) : (
        <ul>
          {aspirants.map(a => (
            <li key={a.id}>
              <strong>{a.name}</strong> – {a.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
