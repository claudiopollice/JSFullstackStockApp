import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {
  TimeSeriesDaily,
  parseTimeSeriesDaily,
  ParsedTimeSeriesDaily,
} from "../Model/TimeSeriesDaily";
import "./StockChartConfig";
import {
  LOADING_TEXT,
  COMPONENT_ERROR_TEXT,
  LOCAL_API_URL,
  CLOUD_API_URL,
} from "./StockChartConfig";

require("highcharts/modules/exporting")(Highcharts);

const runAgainstLocal = false;
const url = runAgainstLocal ? LOCAL_API_URL : CLOUD_API_URL;

export const useFetch = (url: string) => {
  const [data, setData] = useState<TimeSeriesDaily>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return { data, loading, error };
};

export const StockChart = () => {
  const { data, loading, error } = useFetch(url);

  return loading ? (
    <div>{LOADING_TEXT}</div>
  ) : error ? (
    <div>{COMPONENT_ERROR_TEXT}</div>
  ) : (
    <div>
      <HighchartsReact
        id="high-charts-component"
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={stockOptions(inputData(loading, error, data))}
      />
    </div>
  );
};

function stockOptions(data: any) {
  return {
    yAxis: [
      {
        height: "75%",
        labels: {
          align: "left",
          x: -3,
        },
        title: {
          text: "AAPL",
        },
      },
    ],
    series: [
      {
        data: data,
        name: "AAPL Stock Price",
        id: "aapl",
      },
    ],
  };
}

function inputData(
  loading: boolean,
  error: boolean,
  data: ParsedTimeSeriesDaily
) {
  return loading
    ? {}
    : error
    ? {}
    : parseTimeSeriesDaily(data)["Time Series (Daily)"];
}
