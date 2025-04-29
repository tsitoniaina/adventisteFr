import React from "react";

export default function AspirantsRegion({ aspirants }) {
  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-header">
        <h5 class="mb-0">👥 Aspirants de la région</h5>
      </div>
      <div className="table-responsive">
        {aspirants.length === 0 ? (
          <p>Aucun aspirant trouvé.</p>
        ) : (
          <table className="table table-hover table-nowrap">
            <thead class="thead-light">
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">District</th>
              </tr>
            </thead>
            <tbody>
              {aspirants.map((a) => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.district_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
