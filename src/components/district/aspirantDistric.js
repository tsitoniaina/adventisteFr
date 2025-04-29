import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function AspirantsDistrict() {
  const [aspirants, setAspirants] = useState([]);

  useEffect(() => {
    api.get("/aspirants/district")
      .then(res => setAspirants(res.data))
      .catch(err => console.error("Erreur chargement aspirants:", err));
  }, []);

  return (
    <div className="card shadow border-0 mb-4">
      <div className="container mt-4">
        <div className="card-header">🏅Aspirants de mon district</div>
          <div className="card-body">
          {aspirants.length === 0 ? (
            <p>Aucun aspirant trouvé.</p>
          ) : (
            <div className="row">
              {aspirants.map(a => (
                 <div className="col-md-6" >
                 <div className="">
                <p key={a.id}>
                  <strong>{a.name}</strong> – {a.email}
                </p>
                </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
    </div>
  );
}
