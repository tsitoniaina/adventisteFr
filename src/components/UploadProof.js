// src/components/UploadProof.js
import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function UploadProof() {
  const [file, setFile] = useState(null);
  const [requirementId, setRequirementId] = useState("");
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    api.get("/requirements").then(res => {
      setRequirements(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !requirementId) return alert("Veuillez choisir un fichier et une exigence.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("requirement_id", requirementId);

    try {
      await api.post("/proofs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Preuve envoyée !");
      setFile(null);
      setRequirementId("");
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi.");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5 className="text-primary mb-3">📤 Envoyer une preuve</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Exigence :</label>
          <select className="form-select" value={requirementId} onChange={(e) => setRequirementId(e.target.value)}>
            <option value="">-- Sélectionner --</option>
            {requirements.map((r) => (
              <option key={r.id} value={r.id}>{r.parcours} - {r.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Fichier PDF :</label>
          <input type="file" className="form-control" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button className="btn btn-primary w-100" type="submit">📩 Envoyer</button>
      </form>
    </div>
  );
}
