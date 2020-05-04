const express = require('express');

const app = express();

app.listen(3000);

app.use((req, res) => {
    res.send('Maratona Full Cycle 2.0');
});
