// import React, { useEffect, useState } from "react";
// import api from "../services/api";

// export default function AdminMemoires() {
//   const [memoires, setMemoires] = useState([]);

//   useEffect(() => {
//     api.get("/admin/memoires")
//       .then(res => setMemoires(res.data))
//       .catch(err => console.error("Erreur chargement mémoires :", err));
//   }, []);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>📄 Tous les mémoires</h2>
//       {memoires.length === 0 ? (
//         <p>Aucun mémoire trouvé.</p>
//       ) : (
//         <ul>
//           {memoires.map((m) => (
//             <li key={m.id} style={styles.card}>
//               <strong>Aspirant :</strong> {m.aspirant_name}<br />
//               <strong>Statut :</strong>{" "}
//               {m.is_validated === 1
//                 ? "✅ Validé"
//                 : m.is_validated === 0
//                 ? "🕒 En attente"
//                 : "❌ Refusé"}
//               <br />
//               <a
//                 href={`http://localhost:3001/uploads/${m.file_path}`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 📥 Télécharger le mémoire
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// const styles = {
//   card: {
//     background: "#f5f5f5",
//     padding: "1rem",
//     marginBottom: "1rem",
//     borderRadius: "8px",
//   },
// };
import React, { useEffect, useState } from "react";
import api from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminMemoires() {
  const [memoires, setMemoires] = useState([]);

  useEffect(() => {
    api
      .get("/admin/memoires")
      .then((res) => setMemoires(res.data))
      .catch((err) => console.error("Erreur chargement mémoires :", err));
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 1:
        return <span className="badge bg-success">✅ Validé</span>;
      case 0:
        return <span className="badge bg-warning text-dark">🕒 En attente</span>;
      default:
        return <span className="badge bg-danger">❌ Refusé</span>;
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">
        <i className="bi bi-journal-richtext me-2 text-primary"></i>
        Tous les mémoires soumis
      </h2>

      {memoires.length === 0 ? (
        <div className="alert alert-info">Aucun mémoire trouvé.</div>
      ) : (
        <div className="row">
          {memoires.map((m) => (
            <div className="col-md-6 col-lg-4" key={m.id}>
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-person-circle me-2"></i>
                    {m.aspirant_name}
                  </h5>
                  <p className="card-text">
                    <strong>Statut :</strong> {getStatusBadge(m.is_validated)}
                  </p>
                  <a
                    href={`http://localhost:3001/uploads/${m.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary w-100"
                  >
                    <i className="bi bi-download me-2"></i>Télécharger le mémoire
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
