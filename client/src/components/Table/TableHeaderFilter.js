import React from 'react'

import {
  string,
  func
} from 'prop-types'

TableHeaderFilter.propTypes = {
  onChange: func.isRequired,
  content: string.isRequired,
  name: string.isRequired
}

export default function TableHeaderFilter ({
  onChange,
  content,
  name
})  {

  return (
    <td>
      <input
        value={content}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </td>     
  )
}