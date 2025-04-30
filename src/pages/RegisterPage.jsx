import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "aspirant",
    region_id: 1,
  });
  const [regions, setRegions] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await api.get("/regions"); // adapte si l’endpoint est différent
        setRegions(res.data);
      } catch (err) {
        console.error("Erreur chargement des régions :", err);
      }
    };
    fetchRegions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await api.post("/auth/register", formData);
      setSuccess("Inscription réussie ! Redirection...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-body-secondary">
      <style>{`
        .login-card {
          max-width: 420px;
          border-radius: 15px;
        }
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
        .login-title {
          font-weight: 600;
        }
      `}</style>

      <div className="card login-card shadow p-4 border-0 bg-white w-100">
        <div className="text-center mb-4">
          <i className="bi bi-person-plus-fill text-primary" style={{ fontSize: "2rem" }}></i>
          <h3 className="text-primary login-title mt-2">Inscription</h3>
          <p className="text-muted">Veuillez remplir les champs pour créer un compte</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Adresse Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rôle</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="aspirant">Aspirant</option>
              <option value="coordinateur_district">Coordinateur District</option>
              <option value="coordinateur_region">Coordinateur Région</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Région</label>
            <select
              className="form-select"
              name="region_id"
              value="{formData.region_id}"
              onChange={handleChange}
              required
            >
              <option value="test">-- Sélectionnez une région --</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                  test
                </option>
              ))}
            </select>
          </div> */}

          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-person-plus me-2"></i>S’inscrire
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="mb-0">
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-decoration-none text-primary">Se connecter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
