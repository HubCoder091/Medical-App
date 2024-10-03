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
// chatbot.js

// Function to handle sending a message to the chatbot
document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() !== "") {
        // Display user's message in the chat output
        displayMessage("You: " + userInput);
        
        // Assuming you're using Google Gemini AI or any other API
        // Simulate sending message to the chatbot and getting a response
        sendMessageToChatbot(userInput).then(response => {
            displayMessage("Chatbot: " + response); // Show chatbot response
        });

        // Clear the input field
        document.getElementById('chat-input').value = '';
    }
});

function sendMessageToChatbot(message) {
    // Here you would integrate with your chatbot backend or API (e.g., Google Gemini AI)
    return new Promise((resolve) => {
        // Simulated chatbot response (Replace this with actual API call)
        setTimeout(() => {
            resolve("This is a simulated response to: " + message);
        }, 1000);
    });
}

function displayMessage(message) {
    const chatOutput = document.getElementById('chat-output');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}
