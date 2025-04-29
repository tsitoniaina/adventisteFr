import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminRequirements() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    api.get("/requirements")
      .then(res => setRequirements(res.data))
      .catch(err => console.error("Erreur chargement exigences :", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">📋 Exigences</h2>

      {requirements.length === 0 ? (
        <div className="alert alert-info">Aucune exigence trouvée.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Parcours</th>
                <th scope="col">Titre de l'exigence</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((r, index) => (
                <tr key={r.id}>
                  <td>{index + 1}</td>
                  <td>{r.parcours}</td>
                  <td>{r.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
