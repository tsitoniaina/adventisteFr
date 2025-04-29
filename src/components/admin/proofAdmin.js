// import React, { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function ProofsAdmin() {
//   const [proofs, setProofs] = useState([]);

//   useEffect(() => {
//     api.get("/admin/proofs")
//       .then(res => setProofs(res.data))
//       .catch(err => console.error("Erreur chargement preuves :", err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-primary">🧾 Toutes les preuves</h2>

//       {proofs.length === 0 ? (
//         <div className="alert alert-info">Aucune preuve enregistrée.</div>
//       ) : (
//         <div className="row">
//           {proofs.map((p) => (
//             <div key={p.id} className="col-md-6 col-lg-4 mb-4">
//               <div className="card shadow-sm h-100">
//                 <div className="card-body">
//                   <h5 className="card-title text-secondary">
//                     <i className="bi bi-person-fill me-2"></i>{p.aspirant_name}
//                   </h5>
//                   <p className="card-text">
//                     <strong>Exigence :</strong> {p.requirement_title} <br />
//                     <strong>Statut :</strong>{" "}
//                     {p.status === "valide" ? (
//                       <span className="badge bg-success">Validée</span>
//                     ) : p.status === "refuse" ? (
//                       <span className="badge bg-danger">Refusée</span>
//                     ) : (
//                       <span className="badge bg-warning text-dark">En attente</span>
//                     )}
//                   </p>
//                   <a
//                     href={`http://localhost:3001/uploads/${p.file_path}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-outline-primary btn-sm"
//                   >
//                     📄 Voir la preuve
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ProofsAdmin() {
  const [proofs, setProofs] = useState([]);

  useEffect(() => {
    api
      .get("/admin/proofs")
      .then((res) => setProofs(res.data))
      .catch((err) => console.error("Erreur chargement preuves :", err));
  }, []);

  const renderStatusBadge = (status) => {
    switch (status) {
      case "valide":
        return <span className="badge bg-success"><i className="bi bi-check-circle me-1"></i>Validée</span>;
      case "refuse":
        return <span className="badge bg-danger"><i className="bi bi-x-circle me-1"></i>Refusée</span>;
      default:
        return <span className="badge bg-warning text-dark"><i className="bi bi-hourglass-split me-1"></i>En attente</span>;
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bold mb-0">
          <i className="bi bi-folder-check me-2"></i>🧾 Toutes les preuves
        </h4>
        <span className="badge bg-info text-dark">Total : {proofs.length}</span>
      </div>

      {proofs.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          <i className="bi bi-info-circle me-2"></i>Aucune preuve enregistrée.
        </div>
      ) : (
        <div className="row">
          {proofs.map((p) => (
            <div key={p.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    <i className="bi bi-person-fill me-2"></i>
                    {p.aspirant_name}
                  </h5>
                  <p className="mb-2">
                    <strong>🎯 Exigence :</strong> {p.requirement_title}
                  </p>
                  <p className="mb-3">
                    <strong>📌 Statut :</strong> {renderStatusBadge(p.status)}
                  </p>
                  <a
                    href={`http://localhost:3001/uploads/${p.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary w-100"
                  >
                    <i className="bi bi-box-arrow-down me-2"></i>Voir la preuve
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
