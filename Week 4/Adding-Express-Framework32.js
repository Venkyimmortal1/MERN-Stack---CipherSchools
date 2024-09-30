// # Lecture33--Adding-Express-Framework.-Cipherschools

// In this lecture we have seen how to create an basic and simle API using express get function and how to send a request using thunderclient extension and successfully received the response from the backend server.

// app.js

const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("This is some response from your first Node.js server");

});

app.get("/add", (req, res) => {
    let {a:firstNumber, b: secondNumber} = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({sum});
});

app.listen(8080, () => {
    console.log(`server is running.`);
});

// The request sent using thunderclient :
localhost:8080/add?a=10&b=20
// Response received :
{
  "sum": 30
}
