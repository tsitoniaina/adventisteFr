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
    region_id: "",
    district_id: "",
    eglise_id: "",
  });

  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [eglises, setEglises] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/locations/regions")
      .then(res => setRegions(res.data))
      .catch(err => console.error("Erreur régions :", err));
  }, []);

  useEffect(() => {
    if (formData.region_id) {
      api.get(`/locations/districts?region_id=${formData.region_id}`)
        .then(res => setDistricts(res.data))
        .catch(err => console.error("Erreur districts :", err));
    }
  }, [formData.region_id]);

  useEffect(() => {
    if (formData.district_id) {
      api.get(`/locations/eglises?district_id=${formData.district_id}`)
        .then(res => setEglises(res.data))
        .catch(err => console.error("Erreur églises :", err));
    }
  }, [formData.district_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "region_id") {
      setFormData({ ...formData, region_id: value, district_id: "", eglise_id: "" });
    } else if (name === "district_id") {
      setFormData({ ...formData, district_id: value, eglise_id: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    const cleanData = {
      ...formData,
      region_id: formData.region_id || null,
      district_id: formData.district_id || null,
      eglise_id: formData.eglise_id || null,
    };
  
    try {
      await api.post("/auth/register", cleanData);
      setSuccess("Inscription réussie !");
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
          max-width: 500px;
          border-radius: 15px;
        }
      `}</style>

      <div className="card login-card shadow p-4 border-0 bg-white w-100">
        <h3 className="text-center text-primary mb-3">Inscription</h3>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nom</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Mot de passe</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Rôle</label>
            <select name="role" className="form-select" value={formData.role} onChange={handleChange} required>
              <option value="aspirant">Aspirant</option>
              <option value="coordinateur_district">Coordinateur District</option>
              <option value="coordinateur_region">Coordinateur Région</option>
            </select>
          </div>

          {/* ✅ Champs dynamiques si coordinateur_district */}
          {formData.role === "coordinateur_district" && (
            <>
              <div className="mb-3">
                <label>Région</label>
                <select name="region_id" className="form-select" value={formData.region_id} onChange={handleChange} required>
                  <option value="">-- Sélectionner une région --</option>
                  {regions.map(r => (
                    <option key={r.id} value={r.id}>{r.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label>District</label>
                <select name="district_id" className="form-select" value={formData.district_id} onChange={handleChange} required>
                  <option value="">-- Sélectionner un district --</option>
                  {districts.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label>Église</label>
                <select name="eglise_id" className="form-select" value={formData.eglise_id} onChange={handleChange} required>
                  <option value="">-- Sélectionner une église --</option>
                  {eglises.map(e => (
                    <option key={e.id} value={e.id}>{e.name}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-person-plus me-2"></i>S’inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
