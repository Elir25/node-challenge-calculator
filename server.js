const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.get('/add', (req, res) => {
    let value1 = parseInt(req.query.value1);
    
    let value2 = parseInt(req.query.value2);

    const sumOfValues = value1 + value2
    res.send(`The sum of your values is: ${sumOfValues}`)
});

app.get('/substract', (req, res) => {
    let value1 = parseInt(req.query.value1);
    
    let value2 = parseInt(req.query.value2);

    const sumOfValues = value1 - value2
    res.send(`The substraction of your values is: ${sumOfValues}`)
});

app.get('/multiply', (req, res) => {
    let value1 = parseInt(req.query.value1);
    
    let value2 = parseInt(req.query.value2);

    const sumOfValues = value1 * value2
    res.send(`The multiplication of your values is: ${sumOfValues}`)
});

app.get('/divide', (req, res) => {
    let value1 = parseInt(req.query.value1);
    // console.log(typeof value1)
    
    let value2 = parseInt(req.query.value2);
    // console.log(typeof value2)

    const sumOfValues = value1 / value2
    res.send(`The division of your values is: ${sumOfValues}`)
});

app.listen(3000, () => console.log("Server is up and running"))
//02:02:57