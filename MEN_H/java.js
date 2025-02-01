const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/moodtracker', { useNewUrlParser: true, useUnifiedTopology: true });

const moodSchema = new mongoose.Schema({
    moodState: String,
    moodValue: Number,
    timestamp: { type: Date, default: Date.now },
});

const Mood = mongoose.model('Mood', moodSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-mood', async (req, res) => {
    const { moodState, moodValue } = req.body;
    const newMood = new Mood({ moodState, moodValue });
    await newMood.save();
    res.json({ message: 'Mood saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
