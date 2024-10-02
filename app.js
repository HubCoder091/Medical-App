// Initialize Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

// Handle E-Prescription Form Submission
document.getElementById('prescription-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const patientName = document.getElementById('patient-name').value;
    const medication = document.getElementById('medication').value;
    const dosage = document.getElementById('dosage').value;

    alert(`Prescription sent for ${patientName}!\nMedication: ${medication}\nDosage: ${dosage}`);
});

// Handle Emergency Button Click
document.getElementById('emergency-btn').addEventListener('click', function() {
    // Simulate sending an emergency alert
    fetch('/trigger-emergency', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        // Display the popup message
        const popup = document.getElementById('emergency-popup');
        popup.classList.remove('hidden'); // Make the popup visible
        popup.classList.add('show-popup'); // Add the show class

        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove('show-popup'); // Remove show class
            popup.classList.add('hidden'); // Add hidden class
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Emergency alert Sent!');
    });
});

// Simple Chatbot Simulation
document.getElementById('chat-send-btn').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
    const userMessage = chatInput.value;

    if (userMessage) {
        const newMessage = document.createElement('p');
        newMessage.textContent = 'User: ' + userMessage;
        chatWindow.appendChild(newMessage);
        
        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('p');
            botMessage.textContent = 'Bot: How can I assist you?';
            chatWindow.appendChild(botMessage);
        }, 1000);

        chatInput.value = ''; // Clear the input field
    }
});
document.getElementById('prescription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const patientName = document.getElementById('patient-name').value;
    const popup = document.getElementById('confirmation-popup');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Set the confirmation message with patient's name
    confirmationMessage.innerHTML = `Prescription submitted for ${patientName}`;
    
    // Show the popup
    popup.classList.add('show-popup');
    
    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.classList.remove('show-popup');
    }, 3000);
});
document.getElementById('prescription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const patientName = document.getElementById('patient-name').value;
    const popup = document.getElementById('confirmation-popup');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Set the confirmation message with patient's name
    confirmationMessage.innerHTML = `Prescription submitted for ${patientName}`;
    
    // Show the popup
    popup.classList.add('show-popup');
    
    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.classList.remove('show-popup');
    }, 3000);
});

document.getElementById('emergency-btn').addEventListener('click', function () {
    const emergencyPopup = document.getElementById('emergency-popup');
    emergencyPopup.classList.add('show-popup');
    
    // Hide the emergency popup after 3 seconds
    setTimeout(function () {
        emergencyPopup.classList.remove('show-popup');
    }, 3000);
});

document.getElementById('prescription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const patientName = document.getElementById('patient-name').value;
    const popup = document.getElementById('confirmation-popup');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Set the confirmation message with patient's name
    confirmationMessage.innerHTML = `Prescription submitted for ${patientName}`;
    
    // Show the popup
    popup.classList.add('show-popup');
    
    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.classList.remove('show-popup');
    }, 3000);
});

document.getElementById('emergency-btn').addEventListener('click', function () {
    const emergencyPopup = document.getElementById('emergency-popup');
    emergencyPopup.classList.add('show-popup');
    
    // Hide the emergency popup after 3 seconds
    setTimeout(function () {
        emergencyPopup.classList.remove('show-popup');
    }, 3000);
});

// Chatbot Functionality
document.getElementById('chat-send-btn').addEventListener('click', async function () {
    const chatInput = document.getElementById('chat-input').value;
    const chatResponse = document.getElementById('chat-response');

    // Clear input field
    document.getElementById('chat-input').value = '';

    // Show loading response (you can customize this)
    chatResponse.innerHTML = 'Loading...';
    chatResponse.style.display = 'block';

    // Call to Gemini AI API
    try {
        const response = await fetch('https://api.gemini.ai/v1/chat', { // Replace with your actual endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'AIzaSyDUw0Um0FZDzEdKo9EnlNodir6EpET7QWs' // Replace with your actual API key
            },
            body: JSON.stringify({
                prompt: chatInput
            })
        });

        const data = await response.json();
        // Display response from Gemini AI
        chatResponse.innerHTML = data.reply; // Adjust according to the actual response structure
    } catch (error) {
        console.error('Error:', error);
        chatResponse.innerHTML = 'An error occurred. Please try again.';
    }
});
document.getElementById('prescription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const patientName = document.getElementById('patient-name').value;
    const popup = document.getElementById('confirmation-popup');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Set the confirmation message with patient's name
    confirmationMessage.innerHTML = `Prescription submitted for ${patientName}`;
    
    // Show the popup
    popup.classList.add('show-popup');
    
    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.classList.remove('show-popup');
    }, 3000);
});

document.getElementById('emergency-btn').addEventListener('click', function () {
    const emergencyPopup = document.getElementById('emergency-popup');
    emergencyPopup.classList.add('show-popup');
    
    // Hide the emergency popup after 3 seconds
    setTimeout(function () {
        emergencyPopup.classList.remove('show-popup');
    }, 3000);
});

// Chatbot Functionality
document.getElementById('chat-send-btn').addEventListener('click', async function () {
    const chatInput = document.getElementById('chat-input').value;
    const chatResponse = document.getElementById('chat-response');

    // Clear input field
    document.getElementById('chat-input').value = '';

    // Show loading response
    chatResponse.innerHTML = 'Loading...';
    chatResponse.style.display = 'block';

    // Call to Flask API
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: chatInput
            })
        });

        const data = await response.json();
        // Display response from Gemini AI
        if (response.ok) {
            chatResponse.innerHTML = data.response;
        } else {
            chatResponse.innerHTML = 'Error: ' + data.error;
        }
    } catch (error) {
        console.error('Error:', error);
        chatResponse.innerHTML = 'An error occurred. Please try again.';
    }
});
// bill.js

// Example prescription data
const prescriptionData = {
    patientName: "John Doe",
    medication: "Amoxicillin",
    dosage: "500mg",
    cost: 15.99
};

// Populate the bill with prescription data
document.getElementById("patient-name").textContent = prescriptionData.patientName;
document.getElementById("medication").textContent = prescriptionData.medication;
document.getElementById("dosage").textContent = prescriptionData.dosage;
document.getElementById("cost").textContent = prescriptionData.cost.toFixed(2);

// Print Bill Functionality
document.getElementById("print-btn").onclick = function() {
    window.print();
};
