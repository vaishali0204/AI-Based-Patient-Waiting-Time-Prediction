
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

function ModelPerformance() {
  const models = [
    { name: 'Random Forest', mae: 3.05 },
    { name: 'Gradient Boosting', mae: 18.53 },
    { name: 'Decision Tree', mae: 18.59 },
    { name: 'Ridge Regression', mae: 23.33 }
  ];

  return (
    <div className="space-y-6">

      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Model Performance
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Evaluation and comparison of machine learning models.
        </p>
      </div>

      {/* Best model summary */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm font-medium text-blue-800">
          Best Performing Model
        </p>

        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-800">
            Random Forest Regressor
          </h2>

          <p className="text-2xl font-semibold text-blue-800">
            3.05 min MAE
          </p>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          Random Forest achieved the lowest cross-validation MAE
          among the four tested models.
        </p>
      </div>

      {/* Model comparison chart */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-800">
          Model Comparison
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Mean Absolute Error (MAE) in minutes — lower is better.
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={models}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
              />

              <XAxis
                type="number"
                tick={{ fontSize: 12 }}
                label={{
                  value: 'MAE (minutes)',
                  position: 'insideBottom',
                  offset: -2,
                  fontSize: 12
                }}
              />

              <YAxis
                type="category"
                dataKey="name"
                width={125}
                tick={{ fontSize: 12 }}
              />

              <Tooltip
                formatter={(value) => [
                  `${Number(value).toFixed(2)} minutes`,
                  'MAE'
                ]}
              />

              <Bar dataKey="mae" name="MAE" barSize={25}>
                {models.map((model) => (
                  <Cell
                    key={model.name}
                    fill={
                      model.name === 'Random Forest'
                        ? '#2878B5'
                        : '#94A3B8'
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Exact comparison */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-800 mb-4">
          Evaluation Results
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-3 font-medium">Model</th>
                <th className="py-3 font-medium text-right">
                  Cross-validation MAE
                </th>
              </tr>
            </thead>

            <tbody>
              {models.map((model) => (
                <tr
                  key={model.name}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="py-3 text-slate-700">
                    {model.name}
                    {model.name === 'Random Forest' && (
                      <span className="ml-2 text-xs font-medium text-blue-700">
                        Best result
                      </span>
                    )}
                  </td>

                  <td className="py-3 text-right font-medium text-slate-800">
                    {model.mae.toFixed(2)} min
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Metric explanation */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-800">
          Understanding MAE
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Mean Absolute Error measures the average absolute difference
          between actual waiting times and predicted waiting times.
        </p>

        <div className="my-4 rounded-md bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-800">
            MAE = Average of |Actual Waiting Time − Predicted Waiting Time|
          </p>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          For example, an MAE of 3.05 minutes means that the Random
          Forest model had an average absolute prediction error of
          approximately 3.05 minutes in the recorded cross-validation
          evaluation.
        </p>

        <p className="mt-3 text-xs text-slate-500">
          These are previously recorded development results. Actual
          performance may differ on new patient records.
        </p>
      </div>

    </div>
  );
}

export default ModelPerformance;
