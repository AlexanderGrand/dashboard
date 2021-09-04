import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

export function BarColumns(props) {
  const { data, title } = props.source;

  return (
    <>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
        }}
      />
    </>
  );
}
export function GroupBar(props) {
  const { data, title, options } = props.source;
  const { width, height, subtitle } = options
    ? options
    : {
        width: "100%",
        height: "400px",
        subtitle: "",
      };
  console.log(data);
  return (
    <>
      <Chart
        width={width}
        height={height}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          chart: {
            title: title,
            subtitle: subtitle,
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </>
  );
}
export function Pie(props) {
  const { data, title, options } = props.source;
  const { width, height, hole, beginAngle, legend, tooltip } = options
    ? options
    : {
        width: "100%",
        height: "400px",
        hole: 0, //value between 0 y 1, create hole donut graph
        beginAngle: 0, //rotate graph
        legend: "", //legend=none, not show legend
        tooltip: "", //tooltip=none, not show tooltip
      };
  console.log(title);
  return (
    <>
      <Chart
        width={width}
        height={height}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
          pieHole: hole,
          pieStartAngle: beginAngle,
          legend: legend,
          tooltip: { trigger: tooltip },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
}
