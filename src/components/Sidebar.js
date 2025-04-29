import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { removeToken } from "../ auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <>
      <div className="d-lg-none bg-white p-2 border-bottom shadow-sm">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleToggle}
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} fs-4`}></i>
          <span className="ms-2">{isOpen ? "Fermer" : "Menu"}</span>
        </button>
      </div>

      <div
        className={`d-flex flex-column flex-shrink-0 p-3 bg-white border-end shadow-sm ${
          isOpen ? "d-block" : "d-none"
        } d-lg-block`}
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <i className="bi bi-geo-alt fs-4 me-2 text-primary"></i>
          <span className="fs-5 fw-semibold text-primary">Aspirant</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item py-4">
            <i className="bi bi-people me-2"></i>Exigences

          </li>
          <li className="py-4">
            <i className="bi bi-journal-check me-2"></i>Envoyer une preuve
          </li>
          <li className="py-4">
            <i className="bi bi-journal-check me-2"></i>Mémoire
          </li>
          <li className="py-4">
            <i className="bi bi-journal-check me-2"></i>Progression
          </li>
          <li className="py-4">
            <i className="bi bi-award me-2"></i>Investitures
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

