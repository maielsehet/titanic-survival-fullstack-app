from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import joblib
from pydantic import BaseModel
import numpy as np

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

artifacts = joblib.load("model.pkl")

model = artifacts["model"]
# sex_encoder = artifacts["sex_encoder"]
# embarked_encoder = artifacts["embarked_encoder"]
scaler = artifacts["scaler"]





class inputs(BaseModel):
    Pclass: int
    Sex: str
    Age: float
    Fare: float
    Embarked: str
    Family_size: int



@app.get("/")
def home():
    return{"message": "hello mai"}

@app.post("/predict")
def predict(data: inputs):
    try:
        Sex = 1 if data.Sex.lower() == "female" else 0     
        Embarked = 1 if data.Embarked.lower() == "s" else 0 if data.Embarked.lower() == "c" else 2
        input_data = scaler.transform([[int(data.Pclass), int(Sex), float(data.Age), float(data.Fare), float(Embarked), int(data.Family_size)]])

        input_data = [[
            float(data.Pclass),
            float(Sex),
            float(data.Age),
            float(data.Fare),
            float(Embarked),
            float(data.Family_size)
        ]]

        print("INPUT:", input_data)

        prediction = model.predict(input_data)
        proba = model.predict_proba(input_data)[0][1]

        return {"prediction": int(prediction[0]), "input": input_data,"probability": float(proba)}

    except Exception as e:
        return {"error": str(e)}