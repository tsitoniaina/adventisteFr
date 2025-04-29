import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function MemoireValidation() {
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
    <div style={{ padding: "2rem" }}>
      <h2>📄 Validation des mémoires</h2>
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
