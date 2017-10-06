import React from 'react'
import {
  oneOfType,
  string,
  object,
  number
} from 'prop-types'

import {
  isNormalInteger,
  isDecimalNumber,
  isValidUrl
} from '../../utils/regExValidation.js'

TableBodyCell.propTypes = {
  cellData: oneOfType([
    string,
    object,
    number
  ])
}

export default function TableBodyCell ({cellData}) {

  const styles = {
    alignToRight: {
      textAlign: 'right'
    },
    displayBlock: {
      display: 'block'
    }
  }

  const iterateObj = obj => {
    let res = [];
    for (let key in obj) {
      res.push(`${firstCharToUpperCase(key)}: ${obj[key]}`);
    }
    return res;
  }

  const firstCharToUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1)

  const formatData = (data) => {
    
    // check if data is an intiger number (align to right)
    if (isNormalInteger(data)) {
      return <td style={{textAlign: 'right'}}>{data}</td>
      
      // if object write top-down list with pairs
    } else if (typeof data === 'object') {
        return (
          <td>
            {iterateObj(data).map((data, i) => (
              // stack spans on each other with dislpay: block
              <span style={styles.displayBlock} key={i}>{data}</span>))     
            }
          </td>
        )
    
      // if decimal number align to right and add $ prefix sorted to right
      // also if it is decimal with $ move that sign to the right side
    } else if (isDecimalNumber(data) || data.includes('$')) {
        const removeSign = data.replace('$', '')
        const element = prefix => <td style={styles.alignToRight}>{`${removeSign} ${prefix}`}</td>

        return element('$')

      // if url wrap data into ancor
    } else if (isValidUrl(data)) {
      return <td><a href={data} target="_blank" >{data}</a></td>
    }
    
    // any other is a simple string
    else {
      return <td>{data}</td>
    }
  }

  return formatData(cellData)  
}