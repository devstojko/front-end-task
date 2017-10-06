import React, { Component } from 'react'

import Table from './Table'

import compareBy from '../../utils/compareBy'
import filterDataBy from '../../utils/filterDataBy'

export default class TableContainer extends Component {

  state = {
    data: [],
    tableHeader: [],
    sortDir: 'DESC',
    filterBy: {},
    tableData: []
  }

  componentDidMount = () => {
    this.getData()
  }

  componentDidUpdate = prevProps => {
    if (this.props.match.url !== prevProps.match.url) {
      this.getData()
      // console.log('did update');
    }
  }

  handleTableSort = (sortBy, index) => {
    const { sortDir } = this.state
    const sortDirReverse = sortDir === 'ASC' ? 'DESC' : 'ASC'
    const tableData = [...this.state.data].sort(compareBy(sortBy, sortDir))

    this.setState({
      tableData,
      sortDir: sortDirReverse
    })
  }

  onFilterChange = (name, value) => {
    const { data, filterBy } = this.state
    const arrayCopy = filterDataBy(data, name, value)

    this.setState({ 
      tableData: arrayCopy, 
      filterBy: {
        ...filterBy, 
        [name]: value 
      }
    })      
  }

  getData = () => {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => {
        const tableHeader = Object.getOwnPropertyNames(data[0]);

        const obj = [...tableHeader].reduce((o, key) => Object.assign(o, {[key]: ''}), {});

        this.setState({ 
          data,
          tableHeader,
          tableData: data,
          filterBy: obj
        })
      }).catch(err => {
        throw new Error('Error while fetching data.')
      })
  }
    
  render () {
    const renderTable = this.state.data.length === 0 
    ? <div>Loading...</div>
    : 
    <Table
      tableData={this.state.tableData}
      headData={this.state.tableHeader}
      handleTableSort={this.handleTableSort}
      onInputChange={this.onFilterChange}    
      filterBy={this.state.filterBy}
    />

    return renderTable
  }
}