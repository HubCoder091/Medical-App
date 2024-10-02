const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Handle Emergency Alert
app.post('/trigger-emergency', (req, res) => {
    console.log('Emergency alert triggered!');
    res.json({ message: 'Emergency alert triggered!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
