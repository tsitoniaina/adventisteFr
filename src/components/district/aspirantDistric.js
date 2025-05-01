import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function AspirantsDistrict() {
  const [aspirants, setAspirants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAspirant, setNewAspirant] = useState({
    name: "",
    email: "",
    password: "",
    parcours: ""
  });

  useEffect(() => {
    fetchAspirants();
  }, []);

  const fetchAspirants = () => {
    api.get("/aspirants/district")
      .then(res => setAspirants(res.data))
      .catch(err => console.error("Erreur chargement aspirants:", err));
  };

  const handleAddAspirant = async () => {
    try {
      const { name, email, password, parcours } = newAspirant;
      if (!name || !email || !password || !parcours) {
        return alert("Tous les champs sont obligatoires !");
      }

      await api.post("/aspirants/district", newAspirant);
      alert("✅ Aspirant ajouté !");
      setShowForm(false);
      setNewAspirant({ name: "", email: "", password: "", parcours: "" });
      fetchAspirants(); // rechargement
    } catch (err) {
      console.error("Erreur ajout :", err);
      alert("❌ Erreur lors de l’ajout.");
    }
  };

  return (
    <div className="card shadow border-0 mb-4">
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>🏅Aspirants de mon district</h5>
          <button className="btn btn-sm btn-success" onClick={() => setShowForm(true)}>
            <i className="bi bi-plus-circle me-1"></i> Ajouter
          </button>
        </div>

        {showForm && (
          <div className="card border p-3 mb-3 bg-light">
            <h6>➕ Nouveau Aspirant</h6>
            <input className="form-control mb-2" placeholder="Nom"
              value={newAspirant.name}
              onChange={(e) => setNewAspirant({ ...newAspirant, name: e.target.value })} />
            <input className="form-control mb-2" placeholder="Email"
              value={newAspirant.email}
              onChange={(e) => setNewAspirant({ ...newAspirant, email: e.target.value })} />
            <input className="form-control mb-2" type="password" placeholder="Mot de passe"
              value={newAspirant.password}
              onChange={(e) => setNewAspirant({ ...newAspirant, password: e.target.value })} />
            <input className="form-control mb-2" placeholder="Parcours (ex: Chef Guide)"
              value={newAspirant.parcours}
              onChange={(e) => setNewAspirant({ ...newAspirant, parcours: e.target.value })} />

            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={() => setShowForm(false)}>Annuler</button>
              <button className="btn btn-primary" onClick={handleAddAspirant}>Ajouter</button>
            </div>
          </div>
        )}

        <div className="card-body">
          {aspirants.length === 0 ? (
            <p>Aucun aspirant trouvé.</p>
          ) : (
            <div className="row">
              {aspirants.map(a => (
                <div key={a.id} className="col-md-6">
                  <p><strong>{a.name}</strong> – {a.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
