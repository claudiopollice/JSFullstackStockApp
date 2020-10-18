import React from "react";
import { Route, withRouter } from "react-router-dom";
import { StockChart } from "./Components/StockChart";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Route exact path="/" component={StockChart} />
    </div>
  );
};

export default withRouter(App);
