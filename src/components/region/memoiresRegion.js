import React from "react";

export default function MemoiresRegion({ memoires, handleValidation }) {
  return (
    <div className="card mb-4">
      <div className="card-header">📄 Validation des mémoires</div>
      <div className="card-body">
        {memoires.length === 0 ? (
          <p>Aucun mémoire en attente.</p>
        ) : (
          <ul className="list-group">
            {memoires.map((m) => (
              <li className="list-group-item" key={m.id}>
                <strong>Aspirant :</strong> {m.aspirant_name} <br />
                📎{" "}
                <a
                  href={`http://localhost:3001/uploads/${m.file_path}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir mémoire
                </a>
                <div className="mt-2">
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleValidation(m.id, 1)}
                  >
                    ✅ Valider
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleValidation(m.id, -1)}
                  >
                    ❌ Refuser
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
