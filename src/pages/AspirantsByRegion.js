import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AspirantsByRegion() {
  const [aspirants, setAspirants] = useState([]);

  useEffect(() => {
    api.get("/region/aspirants")
      .then((res) => setAspirants(res.data))
      .catch((err) => console.error("Erreur chargement aspirants :", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👥 Aspirants de la région</h2>
      {aspirants.length === 0 ? (
        <p>Aucun aspirant trouvé.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>District</th>
            </tr>
          </thead>
          <tbody>
            {aspirants.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.district_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  },
  th: {
    border: "1px solid #ccc",
    padding: "0.5rem",
  },
  td: {
    border: "1px solid #ccc",
    padding: "0.5rem",
  },
};
