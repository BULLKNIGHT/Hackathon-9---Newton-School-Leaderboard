const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require("./data");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/topRankings", async (req, res) => {
    let limit = 20;
    let offset = 0;
  if(!isNaN(Number(req.query.limit)))
    limit = Number(req.query.limit) < 0 ? 20: parseInt(req.query.limit);
  if(!isNaN(parseInt(req.query.offset)))
    offset = parseInt(req.query.offset);  
  // console.log(limit, offset,Number.isInteger(req.query.limit));
  res.send(data.slice(offset, offset + limit));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
