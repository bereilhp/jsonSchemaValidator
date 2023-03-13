const express = require('express');
const ajv = require("./schemas/data");
const avatar = require("./json/avatar.json");

const app = express();
app.use(express.json());

const validate = ajv.getSchema("movie");

function validateMovie(json) {
    const validate = ajv.getSchema("movie");
    if (validate(json)) {
        console.log("JSON OK");
    } else {
        console.log("JSON NOT OK");
        console.log(validate.errors);
    }
}

app.post("/jsonSchema", (req, res) => {
    if (validate(req.body)) res.status(200).send("JSON is ok");
    else res.status(400).send("JSON is NOT ok");
});

app.post("/jsonBien", (req, res) => {
    res.send("Check Terminal")
    validateMovie(avatar);
});

app.listen(3000, () => console.log("Simple server running on http://localhost:3000"))
