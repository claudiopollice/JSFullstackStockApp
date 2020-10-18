import React from "react";
import { StockChart } from "./StockChart";
import { configure, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

var shallowWrapper;

configure({
  adapter: new Adapter(),
});

beforeEach(() => {
  shallowWrapper = shallow(<StockChart />);
});

describe("<StockChart />", () => {
  it("to render component with loading text first", () => {
    expect(shallowWrapper.find("div")).toHaveLength(1);
    const innerDiv = shallowWrapper.find("div");
    expect(innerDiv.find("HighchartsReact")).toHaveLength(0);
    expect(innerDiv.text()).toEqual("...loading");
  });
});


// describe("<StockChart />", () => {
//   it("to render component with error text on error", (done) => {
//     var renderedWrapper = render(<StockChart />) as any;
//     window.fetch = jest.fn();
//     jest.fn().mockReturnValueOnce(() => Promise.reject())

//     console.log(renderedWrapper);
//     console.log(renderedWrapper['0']['children'][0].data);
//     expect(renderedWrapper.find("div")).toHaveLength(1);
//     const innerDiv = renderedWrapper.find("div");
//     expect(innerDiv.find("HighchartsReact")).toHaveLength(0);
//     expect(innerDiv.text()).toEqual("...loading");
//     done();
//   });
// });

// describe("<StockChart />", () => {
//   it("to render component with HighChardReact component inside on backend 200 response with data", (done) => {
//     var renderedWrapper = render(<StockChart />) as any;

//     console.log(renderedWrapper);
//     console.log(renderedWrapper['0']['children'][0].data);
//     expect(renderedWrapper.find("div")).toHaveLength(1);
//     const innerDiv = renderedWrapper.find("div");
//     expect(innerDiv.find("HighchartsReact")).toHaveLength(1);
//     ...
//     done();
//   });
// });
