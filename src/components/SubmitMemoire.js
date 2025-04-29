// src/components/SubmitMemoire.js
import React, { useState } from "react";
import api from "../services/api";

export default function SubmitMemoire() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Veuillez sélectionner un fichier");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("/memoires", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Mémoire envoyé !");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi.");
    }
  };

  return (
    // <div className="card p-4 shadow-sm">
    //   <h5 className="text-primary mb-3">📄 Soumettre un mémoire</h5>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label className="form-label">Fichier PDF :</label>
    //       <input type="file" className="form-control" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
    //     </div>
    //     <button className="btn btn-primary w-100" type="submit">📤 Envoyer</button>
    //   </form>
    // </div>
    <div className="card shadow-sm border-0 p-4">
      <div className="mb-4 text-center">
        <h4 className="text-primary fw-bold mb-1">
          <i className="bi bi-file-earmark-text me-2"></i>Soumettre un mémoire
        </h4>
        <p className="text-muted mb-0">Importez votre document PDF à valider.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label fw-semibold">
            <i className="bi bi-file-pdf-fill me-2 text-danger"></i>Fichier PDF :
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
          <i className="bi bi-upload me-2"></i>Envoyer le mémoire
        </button>
      </form>
    </div>

  );
  
}
