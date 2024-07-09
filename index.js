const express = require("express");
const app = express();

const logger = (req, res, next) => {
    const start = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url} - ${duration}ms`);
    });

    next();
};


app.use(logger)

app.get("/login", (req, res) => {
    res.send("Hello World!");
});

app.listen(10000,()=>{
    console.log("server is up at port number 10000")
})