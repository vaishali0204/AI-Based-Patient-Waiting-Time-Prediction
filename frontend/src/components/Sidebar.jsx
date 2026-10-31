
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const links = [
    { name: 'Overview', path: '/' },
    { name: 'Patient Prediction', path: '/prediction' },
    { name: 'Staff Analytics', path: '/analytics' },
    { name: 'Model Performance', path: '/model-performance' }
  ];

  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-white p-3 md:min-h-[calc(100vh-4rem)] md:w-60 md:border-b-0 md:border-r md:p-5">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Main Menu
      </p>

      <nav className="flex gap-2 overflow-x-auto md:flex-col">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `shrink-0 rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 hidden border-t border-slate-200 px-3 pt-5 md:block">
        <p className="text-xs leading-5 text-slate-500">
          Patient Waiting Time Prediction System
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Academic Project
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
