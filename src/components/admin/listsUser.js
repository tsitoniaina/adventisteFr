import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ListsUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Erreur chargement utilisateurs :", err));
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bold mb-0">
          <i className="bi bi-people-fill me-2"></i>Liste des Utilisateurs
        </h4>
        <span className="badge bg-info text-dark">
          Total : {users.length}
        </span>
      </div>

      {users.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          <i className="bi bi-info-circle me-2"></i>
          Aucun utilisateur trouvé.
        </div>
      ) : (
        <div className="table-responsive shadow-sm rounded overflow-hidden">
          <table className="table table-hover table-bordered align-middle mb-0">
            <thead className="table-primary text-center">
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Rôle</th>
                <th>District</th>
                <th>Région</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={u.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td className="text-center">
                    <span className={`badge text-uppercase fw-semibold 
                      ${u.role === "admin" ? "bg-danger" :
                        u.role === "aspirant" ? "bg-success" :
                        u.role === "coordinateur_region" ? "bg-warning text-dark" :
                        "bg-secondary"}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="text-center">{u.district_id || "-"}</td>
                  <td className="text-center">{u.region_id || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
