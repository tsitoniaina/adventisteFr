import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ValidationMemoireDistric() {
  const [memoires, setMemoires] = useState([]);

  useEffect(() => {
    api
      .get("/region/memoires/en_attente")
      .then((res) => setMemoires(res.data))
      .catch((err) => console.error("Erreur chargement mémoires :", err));
  }, []);

  const handleValidation = async (id, status) => {
    try {
      await api.patch(`/region/memoires/${id}/validate`, {
        is_validated: status,
      });
      setMemoires(memoires.filter((m) => m.id !== id));
    } catch (err) {
      alert("Erreur lors de la mise à jour");
    }
  };

  return (
    <div className="card shadow border-0 mb-4">
    <div className="card-header">
      <h5 class="mb-0">📄 Validation des mémoires</h5>
      {memoires.length === 0 ? (
        <p>Aucun mémoire en attente.</p>
      ) : (
        <ul>
          {memoires.map((m) => (
            <li key={m.id} style={styles.item}>
              <strong>Aspirant :</strong> {m.aspirant_name} <br />
              📎 <a href={`http://localhost:3001/uploads/${m.file_path}`} target="_blank">Voir mémoire</a>
              <br />
              <button onClick={() => handleValidation(m.id, 1)} style={styles.valid}>✅ Valider</button>
              <button onClick={() => handleValidation(m.id, 0)} style={styles.refuse}>❌ Refuser</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

const styles = {
  item: {
    background: "#f9f9f9",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
  },
  valid: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "0.5rem",
    marginRight: "1rem",
  },
  refuse: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "0.5rem",
  },
};
