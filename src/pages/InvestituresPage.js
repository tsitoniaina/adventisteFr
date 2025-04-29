
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function InvestituresPage() {
  const [investitures, setInvestitures] = useState([]);

  useEffect(() => {
    api
      .get("/investitures")
      .then((res) => setInvestitures(res.data))
      .catch((err) => {
        console.error("Erreur lors du chargement des investitures :", err);
      });
  }, []);

  return (

    <div className="container mt-4">
      <h2 className="text-primary mb-4">🏅 Liste des Investitures</h2>

      {investitures.length === 0 ? (
        <div className="alert alert-info">Aucune investiture trouvée.</div>
      ) : (
        <div className="row">
          {investitures.map((item) => (
            <div className="col-md-12" key={item.id}>
              <div className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    📅 {new Date(item.date).toLocaleDateString()} - 📍 {item.location}
                  </h5>
                  <p className="card-text">
                    🗒️ {item.notes || "Aucune note disponible."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
