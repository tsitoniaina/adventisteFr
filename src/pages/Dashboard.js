import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { removeToken } from "../ auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/img/logoN.png"

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="d-flex h-100 bg-light">
      {/* Sidebar */}
      <div
        className="d-flex flex-column bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="mb-4 text-center">
        <img src={logo} alt="logo"/>
          {/* <i className="bi bi-speedometer2 me-2 text-info"></i>Menu */}
        </h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard/requirements">
              <i className="bi bi-list-check me-2 text-info"></i>Exigences
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard/proofs">
              <i className="bi bi-upload me-2 text-info"></i>Preuves
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard/memoire">
              <i className="bi bi-file-earmark-text me-2 text-info"></i>Soumettre mémoire
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard/progression">
              <i className="bi bi-bar-chart-line me-2 text-info"></i>Progression
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/dashboard/investitures">
              <i className="bi bi-award me-2 text-info"></i>Investitures
            </a>
          </li>
        </ul>

        <div className="mt-auto pt-4">
          <button
            className="btn btn-outline-danger w-100"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-left me-2"></i>Déconnexion
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4 bg-white">
        <header className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
          <h2 className="text-primary m-0">
            <i className="bi bi-grid me-2"></i>Tableau de bord Aspirant
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
                  <h6 className="card-title mb-1">👤 Nom de l'utilisateur</h6>
                  <p className="mb-1 text-muted">📧 email@exemple.com</p>
                  <span className="badge bg-info text-dark">aspirant</span>
                </div>
              </div>
            )}
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
