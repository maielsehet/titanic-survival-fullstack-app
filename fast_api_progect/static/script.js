async function predict() {
    const btnText = document.getElementById("btnText");
    const loader = document.getElementById("loader");
    const resultContainer = document.getElementById("resultContainer");
    const resultElement = document.getElementById("result");

    // Basic Validation
    const age = document.getElementById("Age").value;
    if (!age) {
        alert("Please enter an age");
        return;
    }

    // UI Loading State
    btnText.classList.add("hidden");
    loader.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    const data = {
        Pclass: parseInt(document.getElementById("Pclass").value),
        Sex: document.getElementById("Sex").value,
        Age: parseFloat(age),
        Fare: parseFloat(document.getElementById("Fare").value) || 0,
        Embarked: document.getElementById("Embarked").value,
        Family_size: parseInt(document.getElementById("Family_size").value) || 0
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        // Update Result UI
        resultContainer.classList.remove("hidden");
        if (result.prediction == 1) {
            resultElement.innerHTML = "✨ Survived";
            resultElement.style.color = "#81c784";
        } else {
            resultElement.innerHTML = "🏴‍☠️ Did not survive";
            resultElement.style.color = "#e57373";
        }
    } catch (error) {
        alert("Error connecting to the backend. Make sure your FastAPI server is running!");
    } finally {
        btnText.classList.remove("hidden");
        loader.classList.add("hidden");
    }
}