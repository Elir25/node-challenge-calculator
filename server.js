const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express')
});

//Step 1: Reading endpoint query
//add sum of values  
app.get('/add', (req, res) => {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    //use parseInt to transform the values into numbers

    const sumOfValues = value1 + value2
    res.send(`The sum of your values is: ${sumOfValues}`)
});
//add subtraction of values
app.get('/substract', (req, res) => {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);

    const sumOfValues = value1 - value2
    res.send(`The subtraction of your values is: ${sumOfValues}`)
});
//add multiplication of values
app.get('/multiply', (req, res) => {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);

    const sumOfValues = value1 * value2
    res.send(`The multiplication of your values is: ${sumOfValues}`)
});
//add division of values
app.get('/divide', (req, res) => {
    let value1 = parseInt(req.query.value1);
    // console.log(typeof value1)
    let value2 = parseInt(req.query.value2);
    // console.log(typeof value2)

    const sumOfValues = value1 / value2
    res.send(`The division of your values is: ${sumOfValues}`)
});

//STEP 2
app.get('/:operation/:value1/:value2', (req, res) => {
    //instead of repeating the code we make just one route called operation
    const operation = req.params.operation

    const value1 = parseFloat(req.params.value1)
    const value2 = parseFloat(req.params.value2)
    let result;

    if (operation === 'add') {
        result = value1 + value2
    }
    if (operation === 'subtract') {
        result = value1 - value2
    }
    if (operation === 'multiply') {
        result = value1 * value2
    }
    if (operation === 'divide') {
        result = value1 / value2
    }
    res.send(result.toString())
});

app.listen(3000, () => console.log("Server is up and running"))
