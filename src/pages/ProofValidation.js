import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ProofValidation() {
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
      setProofs(proofs.filter(p => p.id !== id)); // Retire la preuve validée/refusée
    } catch (err) {
      alert("Erreur lors de la mise à jour.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📝 Validation des preuves</h2>
      {proofs.length === 0 ? (
        <p>Aucune preuve en attente.</p>
      ) : (
        <ul>
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
        </ul>
      )}
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
