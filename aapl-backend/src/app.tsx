import express from "express";
const fetch = require("node-fetch");

const PORT = 8081;

const API_KEY = "6KJXVLSGMU8MAYY9";
const TIME_SERIES_DAILY = "TIME_SERIES_DAILY";
const AAPL = "AAPL";

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  next();
});

app.get("/", async (req, res) => {
  var data = await fetch(urlOf(TIME_SERIES_DAILY, AAPL, API_KEY))
    .then((response) => response.json())
    .catch(() => {
      res.statusCode = 502
    });
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

function urlOf(seriesType: string, company: string, apiKey: string): string {
  return `https://www.alphavantage.co/query?function=${seriesType}&symbol=${company}&apikey=${apiKey}`
}