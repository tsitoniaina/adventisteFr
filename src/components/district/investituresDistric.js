
import React, { useEffect, useState } from "react";
import api from "../../services/api";


export default function InvestituresDistric() {
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
    <div className="card shadow border-0 mb-4">
    <div className="container mt-4">
    <div className="card-header">🏅 Liste des Investitures</div>
        <div className="card-body">
          {investitures.length === 0 ? (
            <div className="alert alert-info">Aucune investiture trouvée.</div>
          ) : (
            <div className="row">
              {investitures.map((item) => (
                <div className="col-md-6" key={item.id}>
                    <div className="">
                      <h5 className="">
                        📅 {new Date(item.date).toLocaleDateString()} - 📍 {item.location}
                      </h5>
                      <p className="card-text">
                        🗒️ {item.notes || "Aucune note disponible."}
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
