import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MemoiresAdmin() {
  const [memoires, setMemoires] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE;;
  useEffect(() => {
    api
      .get("/admin/memoires")
      .then((res) => setMemoires(res.data))
      .catch((err) => console.error("Erreur chargement mémoires :", err));
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 1:
        return <span className="badge bg-success"><i className="bi bi-check-circle me-1"></i>Validé</span>;
      case 0:
        return <span className="badge bg-warning text-dark"><i className="bi bi-hourglass-split me-1"></i>En attente</span>;
      default:
        return <span className="badge bg-danger"><i className="bi bi-x-circle me-1"></i>Refusé</span>;
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bold mb-0">
          <i className="bi bi-journal-richtext me-2"></i>📚 Tous les Mémoires Soumis
        </h4>
        <span className="badge bg-info text-dark">
          Total : {memoires.length}
        </span>
      </div>

      {memoires.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          <i className="bi bi-info-circle me-2"></i>Aucun mémoire trouvé.
        </div>
      ) : (
        <div className="row">
          {memoires.map((m) => (
            <div className="col-md-6 col-lg-6 mb-4" key={m.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="bi bi-person-circle me-2"></i>{m.aspirant_name}
                  </h5>
                  <p className="mb-2">
                    <strong>📄 Statut :</strong> {getStatusBadge(m.is_validated)}
                  </p>
                  <a
                    href={`${apiBaseUrl}/uploads/${m.file_path}`}
                    // target="_blank"
                    // rel="noreferrer"
                    download
                    className="btn btn-outline-primary w-100"
                  >
                    <i className="bi bi-box-arrow-down me-2"></i>Télécharger le mémoire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
