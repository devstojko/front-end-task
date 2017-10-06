import React from 'react'
import { array } from 'prop-types'

import TableBodyCell from './TableBodyCell'

TableBody.propTypes = {
  bodyData: array.isRequired
}

export default function TableBody ({bodyData}) {

  const notFound = <tr><td><span>Data not found</span></td></tr>

  const renderBodyData = bodyData.length === 0
  ? notFound
  : bodyData.map((item, i) => {
    return (
      <tr key={i+1}>
        {
          Object.values(item).map((value, j) => (
            <TableBodyCell key={j+1} cellData={value}/>
          ))
        }
    </tr>
    )
  })

  return <tbody>{renderBodyData}</tbody>
}