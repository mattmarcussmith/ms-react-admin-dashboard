import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair, DateTime } from '@syncfusion/ej2-react-charts';


import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/sample';


const Financial = () => {
  const { currentMode } = useStateContext();
   
 
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <Header category="Financial" title="AAPLE Historical" />

    <div className="w-full">
    <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom, DateTime]}/>
      <SeriesCollectionDirective>
          <SeriesDirective 
          dataSource={financialChartData}
          xName="x"
          yName="low"
          name="Apple Inc"
          type="Hilo"
          low="low"
          high="high"
          />

      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  );
  
};

export default Financial;
