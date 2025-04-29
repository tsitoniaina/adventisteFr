import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { removeToken } from "../../ auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/img/logoN.png"

export default function SidebarDistrict() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <>
      {/* Toggle Button pour mobile */}
      <div className="d-lg-none bg-dark p-2 border-bottom shadow-sm">
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={handleToggle}
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} fs-4`}></i>
          <span className="ms-2">{isOpen ? "Fermer" : "Menu"}</span>
        </button>
      </div>

      {/* Sidebar principal */}
      <div
        className={`d-flex flex-column justify-content-between flex-shrink-0 p-3 bg-dark text-white shadow-sm ${
          isOpen ? "d-block" : "d-none"
        } d-lg-flex`}
        style={{ width: "250px", minHeight: "100vh" }}
      >
        {/* Haut du menu */}
        <div>
          <div className="d-flex align-items-center mb-4">
            {/* <i className="bi bi-geo-alt fs-4 me-2 text-info"></i> */}
            <img src={logo} alt="logo"/>
            <span className="fs-5 fw-bold text-white">District</span>
          </div>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/district/validation-preuves") ? "fw-bold" : ""
                }`}
                onClick={() => navigate("/dashboard-district")}
              >
                <i className="bi bi-check-circle me-2"></i>Valider les preuves
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/district/preuves") ? "fw-bold" : ""
                }`}
                onClick={() => navigate("/dashboard-district")}
              >
                <i className="bi bi-file-earmark-text me-2"></i>Voir les preuves
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/district/memoires") ? "fw-bold" : ""
                }`}
                onClick={() => navigate("/dashboard-district")}
              >
                <i className="bi bi-journal-check me-2"></i>Valider les mémoires
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/district/investitures") ? "fw-bold" : ""
                }`}
                onClick={() => navigate("/dashboard-district")}
              >
                <i className="bi bi-award me-2"></i>Les investitures
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/district/aspirants") ? "fw-bold" : ""
                }`}
                onClick={() => navigate("/dashboard-district")}
              >
                <i className="bi bi-people me-2"></i>Aspirants du district
              </button>
            </li>
          </ul>
        </div>

        {/* Footer avec Déconnexion */}
        <div className="mt-4 pt-2 border-top border-light">
          <button
            className="btn btn-outline-danger w-100 mt-3"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-left me-2"></i>Déconnexion
          </button>
        </div>
      </div>
    </>
  );
}
