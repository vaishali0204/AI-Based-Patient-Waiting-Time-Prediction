
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Overview from './pages/Overview';
import PatientPrediction from './pages/PatientPrediction';
import StaffAnalytics from './pages/StaffAnalytics';
import ModelPerformance from './pages/ModelPerformance';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
          <Sidebar />

          <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/prediction" element={<PatientPrediction />} />
                <Route path="/analytics" element={<StaffAnalytics />} />
                <Route path="/model-performance" element={<ModelPerformance />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
