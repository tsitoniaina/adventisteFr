import React, { useState } from "react";
import api from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../components/Sidebar";


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
      alert("✅ Mémoire envoyé avec succès !");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi du mémoire");
    }
  };

  return (
    //     <div className="container-xxl position-relative bg-white d-flex p-0">
    //       {/* Sidebar */}
    //       <Sidebar />
    //   <div className="content p-4 w-100">

    // <div className="container-fluid">
    //   <h2 className="mb-4">
    //     <i className="bi bi-file-earmark-text me-2 text-primary"></i>
    //     Soumettre mon mémoire
    //   </h2>

    //   <div className="card shadow-sm p-4">
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <label htmlFor="fileInput" className="form-label">
    //           <i className="bi bi-upload me-2"></i>Choisir un fichier (.pdf uniquement)
    //         </label>
    //         <input
    //           type="file"
    //           id="fileInput"
    //           className="form-control"
    //           accept=".pdf"
    //           onChange={(e) => setFile(e.target.files[0])}
    //         />
    //       </div>

    //       <button type="submit" className="btn btn-primary w-100">
    //         <i className="bi bi-send me-2"></i>Envoyer le mémoire
    //       </button>
    //     </form>
    //   </div>
    // </div>
    // </div>
    // </div>
    <div className="card p-4 shadow-sm">
    <h5 className="text-primary mb-3">📄 Soumettre un mémoire</h5>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Fichier PDF :</label>
        <input type="file" className="form-control" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button className="btn btn-primary w-100" type="submit">📤 Envoyer</button>
    </form>
  </div>
  );
}
