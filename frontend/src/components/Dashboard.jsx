
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

import StatCard from './StatCard';

function Dashboard() {
  const stats = [
    {
      title: 'Average Waiting Time',
      value: '48.1 min',
      description: 'Historical average · 236 records'
    },
    {
      title: 'Maximum Waiting Time',
      value: '128.3 min',
      description: 'Historical maximum · 236 records'
    },
    {
      title: 'Median Waiting Time',
      value: '45.83 min',
      description: 'Historical median · 236 records'
    },
    {
      title: 'Patient Type Categories',
      value: '4',
      description: 'Workflow categories'
    }
  ];

  const patientData = [
    { name: 'Type 1', value: 84 },
    { name: 'Type 2', value: 29 },
    { name: 'Type 3', value: 10 },
    { name: 'Type 4', value: 119 }
  ];

  const COLORS = [
    '#4776A8',
    '#5A9C91',
    '#D6A65D',
    '#8A80B8'
  ];

  return (
    <div className="space-y-8">

      <section>
        <h1 className="text-2xl font-semibold text-slate-800">
          Staff Analytics Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Historical waiting-time statistics and patient workflow distribution.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-semibold text-slate-800">
          Waiting Time Summary
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-800">
            Patient Type Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Distribution across 242 entry records.
          </p>

          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  label
                >
                  {patientData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-800">
            Patient Type Records
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Entry record count by workflow category.
          </p>

          <div className="mt-5 space-y-5">
            {patientData.map((item, index) => {
              const percentage = (item.value / 242) * 100;

              return (
                <div key={item.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {item.name}
                    </span>

                    <span className="text-slate-500">
                      {item.value} records ({percentage.toFixed(1)}%)
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: COLORS[index]
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-800">
          Data Interpretation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Waiting-time statistics are calculated from 236 records
          containing waiting-time targets. Patient-type distribution
          is based on a separate set of 242 entry records. These
          datasets represent different record populations and should
          not be treated as the same group.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          The project uses synthetic healthcare workflow data for
          academic development, not live hospital records.
        </p>
      </section>

    </div>
  );
}

export default Dashboard;
