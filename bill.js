// bill.js

// Function to get URL parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Get prescription data from URL parameters
const prescriptionData = getQueryParams();

// Populate the bill with prescription data
document.getElementById("patient-name").textContent = prescriptionData.patientName || "N/A";
document.getElementById("medication").textContent = prescriptionData.medication || "N/A";
document.getElementById("dosage").textContent = prescriptionData.dosage || "N/A";
