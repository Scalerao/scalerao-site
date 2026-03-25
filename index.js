const express = require('express');
const app = express();

app.get('/callback', (req, res) => {
    const code = req.query.code;

    if (code) {
        res.send(`<h2>Authorization Successful</h2><p>Code: ${code}</p>`);
    } else {
        res.send(`<h2>No authorization code received</h2>`);
    }
});

app.get('/', (req, res) => {
    res.send("Server running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
