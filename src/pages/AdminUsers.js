import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Erreur chargement utilisateurs :", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">👥 Liste des Utilisateurs</h2>

      {users.length === 0 ? (
        <div className="alert alert-info">Aucun utilisateur trouvé.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="table-light">
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
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className="badge bg-secondary text-uppercase">
                      {u.role}
                    </span>
                  </td>
                  <td>{u.district_id || "-"}</td>
                  <td>{u.region_id || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
