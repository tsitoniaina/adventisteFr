import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../assets/css/style.css"
import SidebarAdmin from "../components/admin/sidebarAdmin";
import ListsUser from "../components/admin/listsUser";
import RequirementsAdmin from "../components/admin/requirementsAdmin";
import ProofsAdmin from "../components/admin/proofAdmin";
import MemoiresAdmin from "../components/admin/memoiresAdmin";
import { removeToken } from "../ auth";

export default function DashboardRegion() {
  const navigate = useNavigate();
  const [aspirants, setAspirants] = useState([]);
  const [memoires, setMemoires] = useState([]);
  const [showCard, setShowCard] = useState(false);

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
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <SidebarAdmin />
      <main className="flex-grow-1 overflow-auto p-4 bg-surface-secondary py-2">
      <header class="bg-surface-primary pt-6 mb-4">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            <h1 class="h2 mb-0 ls-tight">👑 Tableau de bord Admin</h1>
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
                                      </h6>
                                      <p className="mb-1 text-muted">
                                      </p>
                                      <span className="badge bg-info text-dark">
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
        <ListsUser/>
        <MemoiresAdmin/>
        <RequirementsAdmin/>

          <div className="row g-6 mb-6">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            </div>
          </div>
          <ProofsAdmin/>
        </div>
      </main>
    </div>
  );
}
