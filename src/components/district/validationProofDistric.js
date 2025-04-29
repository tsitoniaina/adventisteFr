import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ValidationProofDistric() {
  const [proofs, setProofs] = useState([]);

  useEffect(() => {
    api.get("/proofs/validation")
      .then(res => {
        const pendingProofs = res.data.filter(p => p.status === "en_attente");
        setProofs(pendingProofs);
      })
      .catch(err => console.error("Erreur chargement preuves :", err));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/proofs/${id}/validate`, { status });
      setProofs(proofs.filter(p => p.id !== id)); 
    } catch (err) {
      alert("Erreur lors de la mise à jour.");
    }
  };

  return (
    <div className="card shadow border-0 mb-4">
    <div className="container mt-4">
    <div className="card-header">📝 Validation des preuves</div>
    <div className="card-body">

      {proofs.length === 0 ? (
        <div className="alert alert-info">Aucune preuve en attente.</div>

      ) : (
        <div className="row">
          {proofs.map((p) => (
            <li key={p.id} style={styles.item}>
              <strong>Aspirant ID :</strong> {p.user_id}<br />
              <strong>Exigence :</strong> {p.requirement_id}<br />
              <a href={`http://localhost:3001/uploads/${p.file_path}`} target="_blank" rel="noreferrer">
                📄 Voir la preuve
              </a>
              <br /><br />
              <button onClick={() => updateStatus(p.id, "valide")} style={styles.valid}>
                ✅ Valider
              </button>
              <button onClick={() => updateStatus(p.id, "refuse")} style={styles.refuse}>
                ❌ Refuser
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

const styles = {
  item: {
    background: "#f5f5f5",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: "8px"
  },
  valid: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "0.5rem",
    marginRight: "1rem"
  },
  refuse: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "0.5rem"
  }
};
