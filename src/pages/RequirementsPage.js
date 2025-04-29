// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import InvestituresPage from "../components/InvestituresPage";

// export default function RequirementsPage() {
//   const [requirements, setRequirements] = useState([]);

//   useEffect(() => {
//     api.get("/requirements").then((res) => {
//       setRequirements(res.data);
//     });
//   }, []);

//   return (
//       <div>
//         <div className="row">
   
//             <div className="container-fluid px-4 py-3">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="card border-0 shadow mb-4">
//                     <div className="card-header bg-light">
//                       <h5 className="mb-0 text-primary">
//                         <i className="bi bi-list-check me-2"></i>
//                         Liste des exigences
//                       </h5>
//                     </div>
//                     <div className="card-body">
//                       <div className="row">
//                         {requirements.length === 0 ? (
//                           <div className="col-12">
//                             <div className="alert alert-warning">Aucune exigence trouvée.</div>
//                           </div>
//                         ) : (
//                           requirements.map((r) => (
//                             <div className="col-12 mb-3" key={r.id}>
//                               <div className="card h-100 shadow-sm">
//                                 <div className="card-body">
//                                   <h6 className="card-title text-dark mb-2">
//                                     <i className="bi bi-bookmark-check me-2 text-success"></i>
//                                     {r.title}
//                                   </h6>
//                                   <p className="card-text text-secondary">
//                                     <i className="bi bi-person-lines-fill me-2 text-muted"></i>
//                                     <strong>Parcours :</strong> {r.parcours}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                 {/* <UploadProof /> */}
//                 <InvestituresPage/>
//                 </div>
//               </div>
//             </div>

//         </div>
//         <div className="row">
//           <div className="container-fluid mt-4">
//           </div>
//         </div>
//       </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import InvestituresPage from "../components/InvestituresPage";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function RequirementsPage() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get("/requirements/aspirants/2/requirements", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRequirements(res.data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des exigences :", err);
      });
  }, []);

  // Calcul de la progression
  const total = requirements.length;
  const terminees = requirements.filter((r) => r.status === "terminée").length;
  const progression = total > 0 ? Math.round((terminees / total) * 100) : 0;

  return (
    <div>
      <div className="row">
        <div className="container-fluid px-4 py-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 shadow mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0 text-primary">
                    <i className="bi bi-list-check me-2"></i>Liste des exigences
                  </h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Progression</label>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progression}%` }}
                        aria-valuenow={progression}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {progression}%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {requirements.length === 0 ? (
                      <div className="col-12">
                        <div className="alert alert-warning">
                          Aucune exigence trouvée.
                        </div>
                      </div>
                    ) : (
                      // requirements.map((r) => (
                      //   <div className="col-12 mb-3" key={r.id}>
                      //     <div className="card h-100 shadow-sm">
                      //       <div className="card-body">
                      //         <h6 className="card-title text-dark mb-2">
                      //           <i className="bi bi-bookmark-check me-2 text-success"></i>
                      //           {r.title}
                      //         </h6>
                      //         <p className="card-text text-secondary mb-1">
                      //           <i className="bi bi-person-lines-fill me-2 text-muted"></i>
                      //           <strong>Parcours :</strong> {r.parcours}
                      //         </p>
                      //         {r.status && (
                      //           <p className="card-text">
                      //             <strong>Statut :</strong>{" "}
                      //             <span
                      //               className={`badge ${
                      //                 r.status === "terminée"
                      //                   ? "bg-success"
                      //                   : r.status === "en cours"
                      //                   ? "bg-warning text-dark"
                      //                   : "bg-secondary"
                      //               }`}
                      //             >
                      //               {r.status}
                      //             </span>
                      //           </p>
                      //         )}
                      //       </div>
                      //     </div>
                      //   </div>
                      // ))
                      requirements.map((r) => (
                        <div className="col-12 mb-3" key={r.id}>
                          <div className="card h-100 shadow-sm">
                            <div className="card-body">
                              <h6 className="card-title text-dark mb-2">
                                <i className="bi bi-bookmark-check me-2 text-success"></i>
                                {r.title}
                              </h6>
                              <p className="card-text text-secondary mb-1">
                                <i className="bi bi-person-lines-fill me-2 text-muted"></i>
                                <strong>Parcours :</strong> {r.parcours}
                              </p>
                              {r.status && (
                                <p className="card-text">
                                  <strong>Statut :</strong>{" "}
                                  <span
                                    className={`badge ${
                                      r.status === "terminée"
                                        ? "bg-success"
                                        : r.status === "en cours"
                                        ? "bg-warning text-dark"
                                        : "bg-secondary"
                                    }`}
                                  >
                                    {r.status}
                                  </span>
                                </p>
                              )}
                      
                              {/* Collapse Description */}
                              <div className="accordion" id={`accordion-${r.id}`}>
                                <div className="accordion-item border-0">
                                  <h2 className="accordion-header" id={`heading-${r.id}`}>
                                    <button
                                      className="accordion-button collapsed px-0"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#collapse-${r.id}`}
                                      aria-expanded="false"
                                      aria-controls={`collapse-${r.id}`}
                                    >
                                      <i className="bi bi-eye me-2"></i>Voir plus
                                    </button>
                                  </h2>
                                  <div
                                    id={`collapse-${r.id}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading-${r.id}`}
                                    data-bs-parent={`#accordion-${r.id}`}
                                  >
                                    <div className="accordion-body pt-2 text-muted">
                                      <i className="bi bi-file-earmark-text me-1"></i> {r.description}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Collapse */}
                            </div>
                          </div>
                        </div>
                      ))
                      
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <InvestituresPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
