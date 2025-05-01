import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../assets/css/style.css"
import SidebarDistric from "../components/district/sidebarDistric";
import ValidationProofDistric from "../components/district/validationProofDistric";
import ValidationMemoireDistric from "../components/district/validationMemoireDistric";
import InvestituresDistric from "../components/district/investituresDistric";
import AspirantsDistrict from "../components/district/aspirantDistric";
import { removeToken } from "../ auth";

const DashboardRegion=()=> {
  const navigate = useNavigate();
  const [aspirants, setAspirants] = useState([]);
  const [memoires, setMemoires] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [eglises, setEglises] = useState([]);


  const toggleCard = () => {
    setShowCard(!showCard);
  };
  useEffect(() => {
    api.get("/region/aspirants")
      .then((res) => setAspirants(res.data))
      .catch((err) => console.error("Erreur chargement aspirants:", err));

    api.get("/region/memoires/en_attente")
      .then((res) => setMemoires(res.data))
      .catch((err) => console.error("Erreur chargement memoires:", err));

      api.get("/auth/me/district")
      .then((res) => {
        const districtId = res.data.district_id;
        console.log("🆔 district_id utilisateur connecté :", districtId);
  
        return api.get(`/locations/eglises/by-district/${districtId}`);
      })
      .then((res) => {
        console.log("✅ Églises récupérées :", res.data);
        setEglises(res.data);
      })
      .catch((err) => {
        console.error("Erreur chargement églises ou district :", err);
      });
  }, []);

  console.log("",eglises);
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <SidebarDistric />
      <main className="flex-grow-1 overflow-auto p-4 bg-surface-secondary py-2">
      <header class="bg-surface-primary pt-6 mb-4">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            <h1 class="h2 mb-0 ls-tight">Tableau de bord - Coordinateur District</h1>
                        </div>
                        <div class="col-sm-6 col-12 text-sm-end">
                            <div class="mx-n1">
                             
                                <button
                                  className="btn btn-sm btn-primary mx-1"
                                  onClick={toggleCard}
                                >
                                  <i className="bi bi-person-circle"></i>
                                </button>

                                {showCard && (
                                  <div
                                    className="card shadow position-absolute end-0 mt-2"
                                    style={{ minWidth: "220px", zIndex: 1000 }}
                                  >
                                    <div className="card-body">
                                      <h6 className="card-title mb-1">
                                        {/* 👤 {user.name || "Utilisateur"} */}
                                      </h6>
                                      <p className="mb-1 text-muted">
                                        {/* 📧 {user.email} */}
                                      </p>
                                      <span className="badge bg-info text-dark">
                                        {/* {user.role || "Rôle inconnu"} */}
                                      </span>
                                    </div>
                                  </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </header>
        <div className="container-fluid">
          <div className="row g-6 mb-6">
            <div className="col-md-6">
              <InvestituresDistric/>
              <AspirantsDistrict/>
              <ValidationMemoireDistric/>
            </div>
            <div className="col-md-6">
              <ValidationProofDistric/>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="card-header bg-primary text-white">
              <i className="bi bi-house-door me-2"></i>Églises de votre district
            </div>
            <ul className="list-group list-group-flush">
              {eglises.length === 0 ? (
                <li className="list-group-item text-muted">Aucune église trouvée.</li>
              ) : (
                eglises.map((e) => (
                  <li key={e.id} className="list-group-item">
                    <i className="bi bi-building text-success me-2"></i>{e.name}
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
export default DashboardRegion;