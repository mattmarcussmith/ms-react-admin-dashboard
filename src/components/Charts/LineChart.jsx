import React from "react";
import {
  ChartComponent,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  textRender,
} from "@syncfusion/ej2-react-charts";

import { lineCustomSeries } from "../../data/sample";
import { LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/sample";
import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "#fff" : "" },
        visible: true,
      }}
      background={currentMode === "Dark" ? "#33373e" : ""}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
