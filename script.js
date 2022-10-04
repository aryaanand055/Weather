const express = require("express");
const app = express();

app.get("/*", (req, res) => {
    res.sendFile(__dirname + `/${req.params[0]}`)
})
app.listen(9909)