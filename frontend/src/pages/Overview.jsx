
function Overview() {
  const summary = [
    {
      title: 'Average Waiting Time',
      value: '48.1 min',
      note: 'Historical average'
    },
    {
      title: 'Maximum Waiting Time',
      value: '128.3 min',
      note: 'Historical maximum'
    },
    {
      title: 'Patient Records',
      value: '236',
      note: 'Records with waiting-time targets'
    },
    {
      title: 'Workflow Categories',
      value: '4',
      note: 'Patient types'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Patient Information',
      description:
        'Enter patient type, queue count, arrival hour and arrival minute.'
    },
    {
      number: '02',
      title: 'Machine Learning Model',
      description:
        'The trained Random Forest model processes the patient and queue information.'
    },
    {
      number: '03',
      title: 'Waiting Time Estimate',
      description:
        'The system returns an estimated queue waiting time in minutes.'
    }
  ];

  return (
    <div className="space-y-8">

      <section>
        <p className="text-sm font-medium text-blue-700">
          HOSPITAL QUEUE MANAGEMENT
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-slate-800">
          System Overview
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
          A machine learning-based system designed to estimate
          patient queue waiting times and support better queue
          management.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-semibold text-slate-800">
          Historical Dataset Summary
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summary.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <p className="mt-2 text-2xl font-semibold text-slate-800">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Historical statistics are based on the available synthetic
          development dataset, not live hospital operations.
        </p>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-800">
          How the System Works
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-sm font-semibold text-blue-700">
                STEP {step.number}
              </p>

              <h3 className="mt-2 font-semibold text-slate-800">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-800">
          Project Information
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          This academic project uses a Random Forest Regressor
          to estimate total queue waiting time. The model was
          developed and evaluated using a synthetic healthcare
          workflow dataset.
        </p>
      </section>

    </div>
  );
}

export default Overview;
