import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminProofs() {
  const [proofs, setProofs] = useState([]);

  useEffect(() => {
    api.get("/admin/proofs")
      .then(res => setProofs(res.data))
      .catch(err => console.error("Erreur chargement preuves :", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">🧾 Toutes les preuves</h2>

      {proofs.length === 0 ? (
        <div className="alert alert-info">Aucune preuve enregistrée.</div>
      ) : (
        <div className="row">
          {proofs.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    <i className="bi bi-person-fill me-2"></i>{p.aspirant_name}
                  </h5>
                  <p className="card-text">
                    <strong>Exigence :</strong> {p.requirement_title} <br />
                    <strong>Statut :</strong>{" "}
                    {p.status === "valide" ? (
                      <span className="badge bg-success">Validée</span>
                    ) : p.status === "refuse" ? (
                      <span className="badge bg-danger">Refusée</span>
                    ) : (
                      <span className="badge bg-warning text-dark">En attente</span>
                    )}
                  </p>
                  <a
                    href={`http://localhost:3001/uploads/${p.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    📄 Voir la preuve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
