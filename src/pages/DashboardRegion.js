import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../assets/css/style.css";
import SidebarRegion from "../components/region/sidebarRegion";
import AspirantsRegion from "../components/region/aspirantsRegion";
import MemoiresRegion from "../components/region/memoiresRegion";
import InvestituresRegion from "../components/region/investituresRegion";
import { removeToken } from "../ auth";
import logo from "../assets/img/logoN.png"

export default function DashboardRegion() {
  const navigate = useNavigate();
  const [aspirants, setAspirants] = useState([]);
  const [memoires, setMemoires] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [districts, setDistricts] = useState([]);

  const toggleCard = () => setShowCard(!showCard);

  useEffect(() => {
    api.get("/region/aspirants")
      .then((res) => setAspirants(res.data))
      .catch((err) => console.error("Erreur chargement aspirants:", err));

    api.get("/region/memoires/en_attente")
      .then((res) => setMemoires(res.data))
      .catch((err) => console.error("Erreur chargement memoires:", err));
      
    api.get("/districts/by-region")
      .then((res) => setDistricts(res.data))
      .catch((err) => console.error("Erreur chargement districts:", err));
  }, []);

  const handleValidation = async (id, status) => {
    try {
      await api.patch(`/region/memoires/${id}/validate`, { is_validated: status });
      setMemoires(memoires.filter((m) => m.id !== id));
    } catch (err) {
      alert("Erreur lors de la mise à jour");
    }
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="d-flex h-100 bg-light">
      {/* Sidebar modernisée */}
      <div
        className="d-flex flex-column bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="mb-4 text-center">
          {/* <i className="bi bi-geo-alt me-2 text-info"></i> */}
          <img src={logo} alt="logo"/>
          Région
        </h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard-region">
              <i className="bi bi-people me-2 text-info"></i>Aspirants
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard-region">
              <i className="bi bi-journal-check me-2 text-info"></i>Valider Mémoires
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard-region">
              <i className="bi bi-award me-2 text-info"></i>Investitures
            </a>
          </li>
        </ul>

        <div className="mt-auto pt-4">
          <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
            <i className="bi bi-box-arrow-left me-2"></i>Déconnexion
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-grow-1 p-4 bg-white">
        <header className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
          <h2 className="text-primary m-0">
            <i className="bi bi-bar-chart-steps me-2"></i>Tableau de bord Coordinateur Régional
          </h2>
          <div className="position-relative">
            <button className="btn btn-sm btn-primary" onClick={toggleCard}>
              <i className="bi bi-person-circle"></i>
            </button>
            {showCard && (
              <div
                className="card shadow position-absolute end-0 mt-2"
                style={{ minWidth: "220px", zIndex: 1000 }}
              >
                <div className="card-body">
                  <h6 className="card-title mb-1">👤 Coordinateur</h6>
                  <p className="mb-1 text-muted">📧 email@region.com</p>
                  <span className="badge bg-info text-dark">coordinateur_region</span>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="row g-6 mb-6 p-4">
          <div className="col-md-6">
            <AspirantsRegion aspirants={aspirants} />
            <InvestituresRegion />
          </div>
          <div className="col-md-6">
            <MemoiresRegion memoires={memoires} handleValidation={handleValidation} />
          </div>
        </div>
        <div className="card shadow-sm mb-4">
  <div className="card-header bg-primary text-white">
    <i className="bi bi-map me-2"></i>Districts de votre région
  </div>
  <ul className="list-group list-group-flush">
    {districts.length === 0 ? (
      <li className="list-group-item text-muted">Aucun district trouvé.</li>
    ) : (
      districts.map((d) => (
        <li key={d.id} className="list-group-item">
          <i className="bi bi-geo-alt text-info me-2"></i>{d.name}
        </li>
      ))
    )}
  </ul>
</div>

      </div>
    </div>
  );
}
