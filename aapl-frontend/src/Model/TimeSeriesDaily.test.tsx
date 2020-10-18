import { TimeSeriesDaily, parseTimeSeriesDaily, ParsedTimeSeriesDaily, MetaData } from "./TimeSeriesDaily";

const META_DATA: MetaData = {
  "1. Information": "Daily Prices (open, high, low, close) and Volumes",
  "2. Symbol":"AAPL",
  "3. Last Refreshed":"2020-09-18",
  "4. Output Size":"Compact",
  "5. Time Zone":"US/Eastern"
};

const INPUT_DATA: TimeSeriesDaily = {
  "Meta Data": META_DATA,
  "Time Series (Daily)": {
    "2020-09-18": {
      "1. open":"110.4000",
      "2. high":"110.8800",
      "3. low":"106.0900",
      "4. close":"106.8400",
      "5. volume":"287104882"
    },
    "2020-09-17": {
      "1. open":"109.7200",
      "2. high":"112.2000",
      "3. low":"108.7100",
      "4. close":"110.3400",
      "5. volume":"178010968"
    },
    "2020-09-16":{
      "1. open":"115.2300",
      "2. high":"116.0000",
      "3. low":"112.0400",
      "4. close":"112.1300",
      "5. volume":"155026675"
    },
  }
}

const EXPECTED_OUTPUT_DATA: ParsedTimeSeriesDaily = {
  "Meta Data": META_DATA,
  "Time Series (Daily)": [
    [1602979200000, 110.4000],
    [1602892800000, 109.7200],
    [1602806400000,115.2300]
  ]
}

describe("parseTimeSeriesDaily", () => {
  it("parses raw data to model format", () => {
    expect(parseTimeSeriesDaily(INPUT_DATA)).toEqual(EXPECTED_OUTPUT_DATA);
  });
});
