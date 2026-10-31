import PredictionForm from '../components/PredictionForm';

function PatientPrediction() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-2">
        Patient Prediction
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Enter patient and queue details to estimate waiting time.
      </p>

      <PredictionForm />
    </div>
  );
}

export default PatientPrediction;