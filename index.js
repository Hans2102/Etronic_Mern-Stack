const express = require('express');

//rest obj
const app = express();

app.get('/', (req, res) => {
    res.send("hello World!");
})

//Port
const PORT = 3000;

//Run listen
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});