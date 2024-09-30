// # Lecture31--Creating-A-Node-Server-Cipherschools
// In this lecture we have created an http server using node.js by using code below :

// app.js
const http = require("http");

const server = http.createServer((req, res) => {
    res.write ("This is some response from your first Node.js server");
    res.end();
});

server.listen(3000, () => {
    console.log(`server is running.`);
});

// Command used: npm start.
