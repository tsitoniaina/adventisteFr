import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ListsUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api.get("/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Erreur chargement utilisateurs :", err));
  };
console.log("aaaaaaaaaaaaaaaaaaaaaaa",users)
  const handleVerify = async (id) => {
    try {
      await api.patch(`admin/users/${id}/verify`);
      fetchUsers(); 
    } catch (err) {
      console.error("Erreur lors de la validation :", err);
      alert("Échec de la validation de l'utilisateur.");
    }
  };

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
                <th>Validation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => {
                const isValidated = u.is_verified === 1 || u.is_verified === '1' || u.is_verified === true;
                console.log(`User: ${u.name} - is_verified: ${u.is_verified} - isValidated: ${isValidated}`);
                return (
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
                    <td className="text-center">
                      {(u.role === "coordinateur_district" || u.role === "coordinateur_region") ? (
                        isValidated ? (
                          <i className="bi bi-check-circle-fill text-success fs-5" title="Déjà validé"></i>
                        ) : (
                          <button
                            className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
                            onClick={() => handleVerify(u.id)}
                          >
                            <i className="bi bi-exclamation-circle"></i> Activer
                          </button>
                        )
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
