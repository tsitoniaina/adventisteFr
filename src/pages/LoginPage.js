import React, { useState } from "react";
import api from "../services/api";
import { setToken } from "../ auth";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;
      setToken(token);

      switch (user.role) {
        case "aspirant":
          navigate("/dashboard");
          break;
        case "coordinateur_district":
          navigate("/dashboard-district");
          break;
        case "coordinateur_region":
          navigate("/dashboard-region");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          alert("Rôle inconnu");
      }
    } catch (err) {
      console.error(err);
      setError("Email ou mot de passe incorrect");
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
          <i className="bi bi-lock-fill text-primary" style={{ fontSize: "2rem" }}></i>
          <h3 className="text-primary login-title mt-2">Connexion</h3>
          <p className="text-muted">Veuillez entrer vos identifiants</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Adresse Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">Se souvenir de moi</label>
            </div>
            <a href="#" className="text-decoration-none small text-primary">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-box-arrow-in-right me-2"></i>Se connecter
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="mb-0">
            Vous n’avez pas de compte ?{" "}
            <a href="/register" className="text-decoration-none text-primary">S’inscrire</a>
          </p>
        </div>
      </div>
    </div>
  );
}
