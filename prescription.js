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
