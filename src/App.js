
// working
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
// import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Components/Footer';
import PartForm from './View/Part';
import MachineForm from './View/MachineForm';
import BreakdownForm from './View/BreakdownForm';
import MaintenanceScheduleForm from './View/MaintenanceSheduleForm';
import Skillsform from './View/SkillsForm';
import WorkForceForm from './View/WorkForceForm';
import ProductionPlan from './View/ProductionPlan';
import Toollifeform from './View/ToolsLife';
import TPMSForm from './View/TPMSForm';
import Shiftform from './View/ShiftForm';
import PmcParameter from './View/PMCParameter';
import OperatorPerformance from './View/OperatorPerformance';
import DowntimeForm from './View/DownTime';

// import Dash from './Components/dash';
import OeeMonitoring from './Components/OeeMonitoring';
import DashboardParameter from './Components/DashboardParameter';
import ToolStatics from './Components/ToolStatics';
import TongtaiMachine from './Components/Parameter2';
import Monitoring from './Components/Monitoring';
import ToolingDashboard from './Components/ToolingDashboard';
import Parameter3 from './Components/Parameter3';
import BreakdownLossTable from './Components/BreakdownLossTable';
import OEESheet from './Components/OEESheet';
import PartRejection from './View/RejectionTable';
import Downtimelog from './View/Downtimelog';
// import RejectionTable from './View/RejectionTable'



const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div
          className="main-content"
          style={{
            marginLeft: collapsed ? '60px' : '260px',
            transition: 'margin-left 0.3s ease',
            width: collapsed ? 'calc(100% - 60px)' : 'calc(100% - 260px)',
          }}
        >
          <div className="p-0">
            <Navbar collapsed={collapsed} toggleSidebar={toggleSidebar} />

            {/* Routes for different pages */}
            <Routes>
            {/* <Route path="/" element={<Dash />} /> */}
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/machine/:machineId" element={<Summary />} />  */}
              <Route path="/part" element={<PartForm />} />
              <Route path="/machineform" element={<MachineForm />} />
              <Route path="/breakdownform" element={<BreakdownForm />} />
              <Route path="/maintenanceschedule" element={<MaintenanceScheduleForm />} />
              <Route path="/skillsform" element={<Skillsform />} />
              <Route path="/workforce" element={<WorkForceForm />} />
              <Route path="/productionplan" element={<ProductionPlan />} />
              <Route path="/toolslife" element={<Toollifeform />} />
              <Route path="/tpms" element={<TPMSForm />} />
              <Route path="/shift" element={<Shiftform />} />
              <Route path="/pmc" element={<PmcParameter />} />
              <Route path="/operator" element={<OperatorPerformance />} />
              <Route path="/downtime" element={<DowntimeForm />} />

              <Route path="/oeemonitoring" element={<OeeMonitoring />} />
              <Route path="/parameter" element={<DashboardParameter />} />
              <Route path="/toolstatic" element={<ToolStatics />} />
              <Route path="/parameter2" element={<TongtaiMachine />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/tooling" element={<ToolingDashboard />} />
              <Route path="/parameter3" element={<Parameter3 />} />
              <Route path="/bdloss" element={<BreakdownLossTable />} />
              <Route path="/oeesheet" element={<OEESheet />} />
              <Route path="/partrejection" element={<PartRejection />} />
              <Route path="/downtimelog" element={<Downtimelog />} />
              {/* <Route path="/rejectionTable" element={<RejectionTable />} /> */}
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default Layout;



