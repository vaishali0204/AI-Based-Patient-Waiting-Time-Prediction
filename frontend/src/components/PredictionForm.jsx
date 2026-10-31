
import { useState } from 'react';
import PredictionResult from './PredictionResult';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  'https://ai-based-patient-waiting-time-prediction.onrender.com';

function PredictionForm() {
  const [patientType, setPatientType] = useState('1');
  const [queueCount, setQueueCount] = useState('');
  const [arrivalHour, setArrivalHour] = useState('');
  const [arrivalMinute, setArrivalMinute] = useState('');

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setPrediction(null);

    const queue = Number(queueCount);
    const hour = Number(arrivalHour);
    const minute = Number(arrivalMinute);

    if (
      queueCount === '' ||
      arrivalHour === '' ||
      arrivalMinute === '' ||
      !Number.isInteger(queue) ||
      queue < 0 ||
      !Number.isInteger(hour) ||
      hour < 0 ||
      hour > 23 ||
      !Number.isInteger(minute) ||
      minute < 0 ||
      minute > 59
    ) {
      setError('Please enter valid patient and arrival details.');
      return;
    }

    const patientData = {
      patient_type: Number(patientType),
      queue_count: queue,
      arrival_hour: hour,
      arrival_minute: minute
    };

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Prediction request failed.');
      }

      setPrediction(data.predicted_waiting_time);
    } catch (err) {
      setError(
        err.message === 'Failed to fetch'
          ? 'Unable to connect to the prediction server. Please try again.'
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Patient Details
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the patient's workflow and arrival information.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Patient Type
            </label>

            <select
              value={patientType}
              onChange={(e) => setPatientType(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
            >
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
              <option value="4">Type 4</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Queue Count Before Processing
            </label>

            <input
              type="number"
              min="0"
              step="1"
              value={queueCount}
              onChange={(e) => setQueueCount(e.target.value)}
              placeholder="Enter number of patients"
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Arrival Hour (0–23)
              </label>

              <input
                type="number"
                min="0"
                max="23"
                step="1"
                value={arrivalHour}
                onChange={(e) => setArrivalHour(e.target.value)}
                placeholder="e.g. 9"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Arrival Minute (0–59)
              </label>

              <input
                type="number"
                min="0"
                max="59"
                step="1"
                value={arrivalMinute}
                onChange={(e) => setArrivalMinute(e.target.value)}
                placeholder="e.g. 30"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Predicting...' : 'Predict Waiting Time'}
          </button>
        </form>
      </section>

      <section>
        {prediction !== null ? (
          <PredictionResult
            waitingTime={prediction}
            patientType={patientType}
          />
        ) : (
          <div className="flex h-full min-h-64 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
            <div>
              <h3 className="font-medium text-slate-700">
                Waiting Time Result
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Enter patient details and submit the form to get a prediction.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default PredictionForm;
