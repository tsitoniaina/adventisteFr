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
    <div className="card border-0 shadow mb-4">
      <div className="card-header bg-light">
        <h5 className="mb-0 text-primary">
          <i className="bi bi-check-circle me-2"></i>
          🏅 Liste des Investitures
        </h5>
      </div>

      {investitures.length === 0 ? (
        <div className="alert alert-info">Aucune investiture trouvée.</div>
      ) : (
        <div className="row">
          {investitures.map((item) => (
            <div className="col-12 mb-3 p-3" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark mb-2">
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