function PredictionResult({ waitingTime, patientType }) {
  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800">
        Prediction Result
      </h2>

      <div className="mt-6 bg-blue-50 p-6 rounded-xl text-center">
        <p className="text-gray-600">
          Estimated Waiting Time
        </p>

        <h1 className="text-4xl font-bold text-blue-700 mt-2">
          {Number(waitingTime).toFixed(2)} minutes
        </h1>
      </div>

      <p className="mt-4 text-gray-600">
        Patient Type: {patientType}
      </p>

      <p className="mt-5 text-sm text-gray-500">
        Disclaimer: This is an AI-generated estimate based on
        available data. Actual waiting time may vary.
      </p>
    </div>
  );
}

export default PredictionResult;