
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ProgressionPage() {
  const [requirements, setRequirements] = useState([]);
  const [proofs, setProofs] = useState([]);
  const [memoire, setMemoire] = useState(null);

  useEffect(() => {
    api.get("/requirements").then(res => {
      setRequirements(res.data);
    });

    api.get("/proofs").then(res => {
      setProofs(res.data);
    });

    api.get("/memoires").then(res => {
      setMemoire(res.data.length > 0 ? res.data[0] : null);
    });
  }, []);

  const getStatusForRequirement = (requirementId) => {
    const proof = proofs.find(p => p.requirement_id === requirementId);
    if (!proof) return <span className="text-danger">❌ Non envoyée</span>;
    if (proof.status === "valide") return <span className="text-success">✅ Validée</span>;
    if (proof.status === "refuse") return <span className="text-danger">❌ Refusée</span>;
    return <span className="text-warning">🕒 En attente</span>;
  };

  const getMemoireStatus = () => {
    if (!memoire) return <span className="text-danger">❌ Non soumis</span>;
    if (memoire.is_validated === 1) return <span className="text-success">✅ Validé</span>;
    if (memoire.is_validated === -1) return <span className="text-danger">❌ Refusé</span>;
    return <span className="text-warning">🕒 En attente</span>;
  };

  return (


    <div className="container mt-4">
      <h2 className="text-primary mb-4">📊 Ma progression</h2>

      <div className="card mb-4">
        <div className="card-header bg-light">
          <h5 className="mb-0">📋 Suivi des exigences</h5>
        </div>
        <div className="card-body">
          {requirements.length === 0 ? (
            <p>Aucune exigence disponible.</p>
          ) : (
            <ul className="list-group">
              {requirements.map((r) => (
                <li key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {r.parcours} - {r.title}
                  {getStatusForRequirement(r.id)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-light">
          <h5 className="mb-0">📄 Statut du mémoire</h5>
        </div>
        <div className="card-body">
          {getMemoireStatus()}
        </div>
      </div>
    </div>
  );
}
