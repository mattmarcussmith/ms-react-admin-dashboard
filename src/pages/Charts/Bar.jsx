import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  BarSeries,
  DataLabel,
  Category
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/sample";
import { useStateContext } from "../../context/ContextProvider";
import { Tooltip } from "@syncfusion/ej2-react-popups";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <Header category="Chart" title="Olympic Medal Counts - RIO" />

    <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : ""}
      legendSettings={{ background: 'white' }}

    >
      <Inject services={[Legend, BarSeries, DataLabel, Category, Tooltip, ColumnSeries ]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item}  />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
  
};

export default Bar;
