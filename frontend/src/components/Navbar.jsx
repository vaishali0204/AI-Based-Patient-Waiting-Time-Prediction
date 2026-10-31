
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-sm font-semibold text-white">
          PC
        </div>

        <div>
          <h1 className="text-base font-semibold text-slate-800">
            PatientCare
          </h1>
          <p className="text-xs text-slate-500">
            Waiting Time Management
          </p>
        </div>
      </Link>

      <div className="hidden text-sm text-slate-500 sm:block">
        Patient Waiting Time Prediction System
      </div>
    </header>
  );
}

export default Navbar;
