import React, { Component } from 'react'
import {
  object,
  array,
  func
} from 'prop-types'

import { Table as ReacstrapTable } from 'reactstrap'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

Table.propTypes = {
  tableData: array.isRequired,
  headData: array.isRequired,
  handleTableSort: func.isRequired,
  onInputChange: func.isRequired,
  filterBy: object.isRequired
}

export default function Table ({
  tableData,
  headData,
  handleTableSort,
  onInputChange,
  filterText,
  filterBy
}) {

  return (
    <ReacstrapTable bordered responsive>
      <TableHeader 
        headData={headData}
        onCellClick={handleTableSort}
        onInputChange={onInputChange}
        filterBy={filterBy}
      />
      <TableBody bodyData={tableData} />
    </ReacstrapTable >
  )
}