🚢 Titanic Survival Prediction App

A full-stack machine learning project that predicts whether a passenger would survive the Titanic disaster.

🔍 Overview

This project combines:

- A trained Machine Learning model
- A FastAPI backend for prediction
- A clean frontend interface using HTML, CSS, and JavaScript

Users can input passenger details and get real-time predictions.

---

⚙️ Tech Stack

- Python
- FastAPI
- Scikit-learn
- Joblib
- HTML / CSS / JavaScript

---

📊 Features

- Predict survival based on passenger data
- REST API endpoint ("/predict")
- Interactive frontend UI
- Real-time response from ML model

---

📁 Project Structure

project/
│
├── main.py
├── model.pkl
├── requirements.txt
└── static/
    ├── index.html
    ├── style.css
    └── script.js

---

🚀 How to Run Locally

1. Install dependencies

pip install -r requirements.txt

2. Run the server

uvicorn main:app --reload

3. Open in browser

http://127.0.0.1:8000/static/index.html

---

🔌 API Endpoint

POST "/predict"

Example Input:

{
  "Pclass": 1,
  "Sex": "female",
  "Age": 22,
  "Fare": 500,
  "Embarked": "S",
  "Family_size": 3
}

Response:

{
  "prediction": 1
}

---

💡 Future Improvements

- Add model probability display
- Improve UI/UX design
- Deploy the app online (Render / Railway)
- Add data validation and error handling

---

👩‍💻 Author

Mai Esmail
