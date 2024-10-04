document.getElementById("prescription-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the entered prescription data
    const name = document.getElementById("patient-name").value;
    const medication = document.getElementById("medication").value;
    const dosage = document.getElementById("dosage").value;
    
    // Create an object to store the data
    const prescription = { name, medication, dosage };
    
    // Store the prescription in local storage
    let prescriptionHistory = JSON.parse(localStorage.getItem("prescriptionHistory")) || [];
    prescriptionHistory.push(prescription);
    localStorage.setItem("prescriptionHistory", JSON.stringify(prescriptionHistory));

    alert("Prescription saved successfully!");
});

document.getElementById("view-prescription-history").addEventListener("click", function() {
    const historyContent = document.getElementById("history-content");
    const prescriptionHistory = JSON.parse(localStorage.getItem("prescriptionHistory")) || [];

    if (prescriptionHistory.length === 0) {
        historyContent.innerHTML = "<p>No prescription history available.</p>";
    } else {
        let html = "<ul>";
        prescriptionHistory.forEach((prescription, index) => {
            html += `<li><strong>${index + 1}:</strong> ${prescription.name} - ${prescription.medication}, Dosage: ${prescription.dosage}</li>`;
        });
        html += "</ul>";
        historyContent.innerHTML = html;

        // Show the delete button when there is history
        document.getElementById("delete-prescription-history").style.display = "inline-block";
    }

    // Show the prescription history section
    document.getElementById("prescription-history").style.display = "block";
});

document.getElementById("delete-prescription-history").addEventListener("click", function() {
    // Clear the prescription history from local storage
    localStorage.removeItem("prescriptionHistory");

    // Clear the displayed history
    document.getElementById("history-content").innerHTML = "<p>No prescription history available.</p>";

    // Hide the delete button after clearing history
    document.getElementById("delete-prescription-history").style.display = "none";

    alert("Prescription history deleted successfully!");
});

// prescription.js

document.getElementById('prescription-form').onsubmit = function(event) {
    event.preventDefault();  // Prevents default form submission behavior

    // Get the form values
    const patientName = document.getElementById('patient-name').value;
    const medication = document.getElementById('medication').value;
    const dosage = document.getElementById('dosage').value;

    // Redirect to bill.html with data in URL parameters
    window.location.href = `bill.html?patientName=${encodeURIComponent(patientName)}&medication=${encodeURIComponent(medication)}&dosage=${encodeURIComponent(dosage)}`;
};