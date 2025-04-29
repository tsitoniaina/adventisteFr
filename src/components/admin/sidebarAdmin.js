
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { removeToken } from "../../ auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/img/logoN.png"

export default function SidebarAdmin() {
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
      {/* Toggle mobile */}
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

      {/* Sidebar */}
      <div
        className={`d-flex flex-column justify-content-between flex-shrink-0 p-3 bg-dark text-white shadow-sm ${
          isOpen ? "d-block" : "d-none"
        } d-lg-flex`}
        style={{ width: "250px", minHeight: "100vh" }}
      >
        {/* Contenu principal */}
        <div>
          <div className="d-flex align-items-center mb-4">
            <img src={logo} alt="logo"/>
            {/* <i className="bi bi-shield-lock fs-4 me-2 text-info"></i> */}
            <span className="fs-5 fw-bold text-white">Admin</span>
          </div>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/admin/users") ? "fw-bold" : ""
                }`}
                // onClick={() => navigate("/admin/users")}
              >
                <i className="bi bi-people me-2"></i>Gérer les utilisateurs
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/admin/exigences") ? "fw-bold" : ""
                }`}
                // onClick={() => navigate("/admin/exigences")}
              >
                <i className="bi bi-journal-check me-2"></i>Gérer les exigences
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/admin/proofs") ? "fw-bold" : ""
                }`}
                // onClick={() => navigate("/admin/proofs")}
              >
                <i className="bi bi-file-earmark-text me-2"></i>Voir les preuves
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/admin/memoires") ? "fw-bold" : ""
                }`}
                // onClick={() => navigate("/admin/memoires")}
              >
                <i className="bi bi-journal-text me-2"></i>Voir les mémoires
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn text-start text-white w-100 ${
                  isActive("/admin/investitures") ? "fw-bold" : ""
                }`}
                // onClick={() => navigate("/admin/investitures")}
              >
                <i className="bi bi-award me-2"></i>Investitures
              </button>
            </li>
          </ul>
        </div>

        {/* Footer - Déconnexion */}
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
