import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';



const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="Stack Chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
    </ChartComponent>
  )
}

export default Stacked