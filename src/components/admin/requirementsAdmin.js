import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RequirementsAdmin() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    api.get("/requirements")
      .then(res => setRequirements(res.data))
      .catch(err => console.error("Erreur chargement exigences :", err));
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="text-primary fw-bold mb-0">
          <i className="bi bi-journal-text me-2"></i>📋 Exigences enregistrées
        </h4>
        <span className="badge bg-info text-dark">Total : {requirements.length}</span>
      </div>

      {requirements.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          <i className="bi bi-info-circle me-2"></i>Aucune exigence trouvée.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle shadow-sm">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th><i className="bi bi-shuffle me-1"></i>Parcours</th>
                <th><i className="bi bi-file-text me-1"></i>Exigence</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((r, index) => (
                <tr key={r.id}>
                  <td className="fw-bold">{index + 1}</td>
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
