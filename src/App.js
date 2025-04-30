import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RequirementsPage from "./pages/RequirementsPage";
import InvestituresPage from "./pages/InvestituresPage";
import UploadProof from "./pages/UploadProof";
import ProofValidation from "./pages/ProofValidation";
import ProgressionPage from "./pages/ProgressionPage";
import SubmitMemoire from "./pages/SubmitMemoire";
import DashboardDistrict from "./pages/DashboardDistrict";
import ProtectedRoute from "./components/ProtectedRoute";
import AspirantsByDistrict from "./pages/AspirantsByDistrict";
import MemoireValidation from "./pages/MemoireValidation";
import DashboardRegion from "./pages/DashboardRegion";
import AspirantsByRegion from "./pages/AspirantsByRegion";
import DashboardAdmin from "./pages/DashboardAdmin";
import AdminUsers from "./pages/AdminUsers";
import AdminRequirements from "./pages/AdminRequirements";
import AdminProofs from "./pages/AdminProofs";
import AdminMemoires from "./pages/AdminMemoires";
import DashboardLayout from "./pages/Dashboard"; // Ce composant inclut le <Outlet />
import LandingFepetra from "./pages";
import RegisterPage from "./pages/RegisterPage";
import MemoireViewer from "./pages/MemoireViewer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingFepetra />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/requirements" element={<AdminRequirements />} />
        <Route path="/admin/proofs" element={<AdminProofs />} />
        <Route path="/admin/memoires" element={<AdminMemoires />} />
        <Route path="/memoire/:id" element={<MemoireViewer />} />
        {/* Coordinateur District */}
        <Route path="/dashboard-district" element={<ProtectedRoute><DashboardDistrict /></ProtectedRoute>} />
        <Route path="/aspirants-district" element={<ProtectedRoute><AspirantsByDistrict /></ProtectedRoute>} />
        <Route path="/proofs/validation" element={<ProtectedRoute><ProofValidation /></ProtectedRoute>} />

        {/* Coordinateur Région */}
        <Route path="/dashboard-region" element={<ProtectedRoute><DashboardRegion /></ProtectedRoute>} />
        <Route path="/aspirants/region" element={<ProtectedRoute><AspirantsByRegion /></ProtectedRoute>} />
        <Route path="/memoires/validation" element={<ProtectedRoute><MemoireValidation /></ProtectedRoute>} />
        <Route path="investitures" element={<InvestituresPage />} />

        {/* Aspirant : tableau de bord avec sous-pages */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<RequirementsPage />} />
          <Route path="requirements" element={<RequirementsPage />} />
          <Route path="proofs" element={<UploadProof />} />
          <Route path="memoire" element={<SubmitMemoire />} />
          <Route path="progression" element={<ProgressionPage />} />
          <Route path="investitures" element={<InvestituresPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

