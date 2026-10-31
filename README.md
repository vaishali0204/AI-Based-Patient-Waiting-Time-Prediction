# AI-Based Digital Queue and Patient Waiting Time Prediction System

An AI-powered web application that estimates patient queue waiting time using historical workflow data and a trained Random Forest regression model.

## Project Overview

Long waiting times in healthcare facilities can create uncertainty for patients and make queue management difficult. This project explores how machine learning can estimate the time a patient may spend waiting in a queue based on selected workflow and arrival details.

The application provides a web interface where users enter patient information and receive an estimated waiting time.

## Dataset Attribution and License

This project uses the **Synthetic Dataset of Emergency Healthcare Services**, obtained from Zenodo.

- **Dataset source:** https://doi.org/10.5281/zenodo.14270002
- **Creator:** Marco Ferreira (verify the creator details on the Zenodo record)
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0/

The dataset is publicly available and is used for academic and educational purposes. Any modifications or adaptations made to the dataset are identified in the project.

The original dataset remains subject to its CC BY-SA 4.0 licence.

## Key Features

- Patient waiting-time prediction through a web interface.
- Random Forest regression model.
- FastAPI backend for serving predictions.
- React-based frontend.
- Input validation for patient and arrival details.
- Dashboard with model performance information.
- REST API for communication between frontend and backend.

## Machine Learning Approach

**Problem type:** Supervised Machine Learning — Regression

**Target variable:** Total Queue Waiting (min)

The target was calculated as:

`Total Queue Waiting = Length of Stay - LOS without Queues`

### Model Features

The final reduced model uses four input features:

1. Patient Type
2. Queue Count Before Processing
3. Arrival Hour
4. Arrival Minute

Patient Type represents a workflow classification in the dataset. It is not a measure of medical urgency or patient severity.

### Model

- Random Forest Regressor
- Scikit-learn preprocessing pipeline
- Joblib for saving and loading the trained model

### Model Performance

| Metric | Test Result |
|---|---:|
| Mean Absolute Error (MAE) | 2.13 minutes |
| Root Mean Squared Error (RMSE) | 2.97 minutes |
| R² Score | 0.9708 |

These results are based on the available dataset and test split. They should not be interpreted as evidence of hospital-level performance.

## Technology Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Recharts

**Backend**
- Python
- FastAPI
- Pandas
- Scikit-learn
- Joblib

## Project Structure

```text
waiting time prediction 2/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── waiting_time_model.joblib
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── waiting_time_model.ipynb
├── .gitignore
└── README.md
```

## Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd "waiting time prediction 2"
```

### 2. Set up the backend

```bash
cd backend
python -m venv .venv
```

Activate the environment on Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
python -m uvicorn main:app --reload
```

Backend API: `http://127.0.0.1:8000`

API documentation: `http://127.0.0.1:8000/docs`

### 3. Set up the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## API Endpoint

### POST `/predict`

Accepts patient workflow and arrival information and returns a predicted waiting time.

Example request:

```json
{
  "patient_type": 1,
  "queue_count": 5,
  "arrival_hour": 9,
  "arrival_minute": 30
}
```

Example response:

```json
{
  "predicted_waiting_time": 47.67,
  "unit": "minutes",
  "model": "Random Forest Regressor"
}
```

## Dataset and Limitations

The project uses a synthetic healthcare workflow dataset obtained from Zenodo (record 14270002).

The dataset contains a limited number of records representing one simulated day. Therefore:

- The model's ability to generalize to other days and hospitals is not established.
- Predictions are estimates, not guaranteed waiting times.
- The application is an academic prototype, not a clinically validated hospital system.
- Patient Type is a workflow category and must not be interpreted as medical triage.

## Future Improvements

- Evaluate the model on larger datasets covering multiple days and facilities.
- Incorporate real-time queue updates.
- Compare additional regression algorithms.
- Improve model monitoring and prediction reliability.
- Deploy the application for public demonstration.

## Disclaimer

This project is developed for academic and educational purposes. It is not intended for clinical decision-making or as a replacement for hospital queue-management systems.