import React from 'react'

import {
  number,
  string,
  func
} from 'prop-types'

TableHeaderCell.propTypes = {
  title: string.isRequired,
  index: number.isRequired,
  onClick: func.isRequired,
  formatedTitle: string.isRequired
}

export default function TableHeaderCell ({
  title,
  index,
  onClick,
  formatedTitle
})  {
  
  return <th onClick={() => onClick(title, index)} >{formatedTitle}</th>
}