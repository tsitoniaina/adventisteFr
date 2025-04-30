import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MemoireViewer() {
  const { id } = useParams();
  const [filePath, setFilePath] = useState("");
  const apiBaseUrl = process.env.REACT_APP_API_BASE;

  useEffect(() => {
    // On récupère le chemin du mémoire avec l'ID
    fetch(`${apiBaseUrl}/admin/memoire/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilePath(data.file_path);
      })
      .catch((err) => console.error("Erreur chargement mémoire :", err));
  }, [id, apiBaseUrl]);

  return (
    <div className="container text-center py-4">
      <h4 className="text-primary mb-4">
        <i className="bi bi-file-earmark-image me-2"></i>Prévisualisation du Mémoire
      </h4>

      {filePath ? (
        <img
          src={`${apiBaseUrl}/uploads/${filePath}`}
          alt="Mémoire"
          className="img-fluid shadow rounded"
        />
      ) : (
        <div className="alert alert-info">Chargement en cours...</div>
      )}
    </div>
  );
}
