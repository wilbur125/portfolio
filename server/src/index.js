const express  = require ('express');
const app = express();

const PORT  = process.env.PORT || 9000;


//Middleware
app.use(express.static('client'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});