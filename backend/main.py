
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import pandas as pd
import joblib
import os

app = FastAPI(
    title="Patient Waiting Time Prediction API",
    description="Predicts patient queue waiting time using a Random Forest model.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "https://ai-based-patient-waiting-time-prediction-uqwr.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "waiting_time_model.joblib")
model = joblib.load(MODEL_PATH)


class PatientInput(BaseModel):
    patient_type: int = Field(ge=1, le=4)
    queue_count: int = Field(ge=0)
    arrival_hour: int = Field(ge=0, le=23)
    arrival_minute: int = Field(ge=0, le=59)


@app.get("/")
def home():
    return {"message": "Patient Waiting Time Prediction API is running!"}


@app.get("/health")
def health_check():
    return {"status": "healthy", "model_loaded": model is not None}


@app.get("/model-info")
def model_info():
    return {
        "model": "Random Forest Regressor",
        "status": "loaded",
        "features": [
            "Patient Type",
            "Queue Count Before Processing",
            "Arrival Hour",
            "Arrival Minute"
        ]
    }


@app.post("/predict")
def predict_waiting_time(patient: PatientInput):
    input_data = pd.DataFrame([{
        "Patient Type": patient.patient_type,
        "Queue Count Before Processing": patient.queue_count,
        "Arrival Hour": patient.arrival_hour,
        "Arrival Minute": patient.arrival_minute
    }])

    prediction = model.predict(input_data)
    waiting_time = float(prediction[0])

    return {
        "predicted_waiting_time": round(waiting_time, 2),
        "unit": "minutes",
        "model": "Random Forest Regressor"
    }
