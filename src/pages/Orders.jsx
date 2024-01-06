import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid } from "../data/sample";
import { Header } from "../components";
const Orders = () => {

  return (
    <div className=" m-2 md:m-10 dark:text-white p-2 md:p-10 bg-white rounded ">
      <Header  category="Page" title="Orders"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective  key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, Edit, PdfExport]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
