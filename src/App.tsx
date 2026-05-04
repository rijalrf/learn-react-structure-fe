import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./templates/BaseLayout";
import WorkOrderPage from "./pages/WorkOrder";
import CreateWorkOrderPage from "./pages/CreateWorkOrder";
import WorkOrderDetailPage from "./pages/WorkOrderDetail";
import EditWorkOrderPage from "./pages/EditWorkOrder";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* BaseLayout menjadi Parent Route */}
        <Route element={<BaseLayout />}>
          <Route path="/" element={<WorkOrderPage />} />
          <Route path="/create-spk" element={<CreateWorkOrderPage />} />
          <Route path="/spk-detail/:no_spk" element={<WorkOrderDetailPage />} />
          <Route path="/edit-spk/:no_spk" element={<EditWorkOrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
