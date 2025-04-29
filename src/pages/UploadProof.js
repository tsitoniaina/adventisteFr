
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

    if (!file || !requirementId) {
      return alert("Veuillez choisir un fichier et une exigence.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("requirement_id", requirementId);

    try {
      const res = await api.post("/proofs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Fichier envoyé !");
      setFile(null);
      setRequirementId("");
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi.");
    }
  };

  return (
  <div className="card shadow-sm border-0 p-4">
  <div className="mb-4 text-center">
    <h4 className="text-primary fw-bold mb-1">
      <i className="bi bi-upload me-2"></i>Envoyer une preuve
    </h4>
    <p className="text-muted mb-0">Sélectionnez une exigence et importez votre fichier PDF.</p>
  </div>

  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label fw-semibold">
        <i className="bi bi-journal-text me-2 text-primary"></i>Exigence :
      </label>
      <select
        className="form-select shadow-sm"
        value={requirementId}
        onChange={(e) => setRequirementId(e.target.value)}
        required
      >
        <option value="">-- Sélectionner --</option>
        {requirements.map((r) => (
          <option key={r.id} value={r.id}>
            {r.parcours} - {r.title}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-4">
      <label className="form-label fw-semibold">
        <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>Fichier PDF :
      </label>
      <input
        type="file"
        className="form-control shadow-sm"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
    </div>

    <button className="btn btn-primary w-100 shadow-sm" type="submit">
      <i className="bi bi-send-fill me-2"></i>Soumettre la preuve
    </button>
  </form>
</div>

  );
}
