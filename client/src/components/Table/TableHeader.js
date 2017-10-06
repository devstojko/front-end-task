import React from 'react'

import { Input } from 'reactstrap'

import TableHeaderFilter from './TableHeaderFilter'
import TableHeaderCell from './TableHeaderCell'

import formatTitle from '../../utils/formatTitle'

export default function TableHeader ({
  headData,
  onCellClick,
  onInputChange,
  filterBy,
  content
})  {
  
  return (
    <thead>
       <tr>
        { headData.map((title, index) => (
          <TableHeaderCell 
            key={index}
            index={index} 
            title={title} 
            formatedTitle={formatTitle(title)}
            onClick={onCellClick} 
          />
        ))}
      </tr>
      <tr>
        { headData.map((title, index) => {
          if (title === 'datetime') {
            return (
              <td key={index+2}>
                <Input  type="select" className="my-2">
                  <option>This feature is not done yet</option>
                  <option>Sort by date</option>
                  <option>Sort by time</option>
                </Input>
              </td>
            )
          } else {
            return (
              <TableHeaderFilter 
                key={index+1}
                name={title}
                content={filterBy[title]}
                onChange={onInputChange}
              />
            )
          }
        })}
      </tr>
    </thead> 
  )
}