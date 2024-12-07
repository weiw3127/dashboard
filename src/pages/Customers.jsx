import React from 'react'
import { ColumnsDirective,  ColumnDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar, Search } from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Customers" />
      <GridComponent 
        dataSource={customersData}
        allowPaging
        enableHover={false}
        pageSettings={{pageCount: 5}}
        allowSorting
        editSettings={{allowDeleting: true, allowEditing: true}}
        toolbar={['Search', 'Delete']}
      >
        <ColumnsDirective>
          {
            customersGrid.map((item, index) => 
            <ColumnDirective key={index} {...item}/>)
          }
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, Search]}/>
      </GridComponent>
    </div>
  )
}

export default Customers