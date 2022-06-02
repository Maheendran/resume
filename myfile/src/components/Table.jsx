import React from 'react'
import "./Table.css"
export const Table = ({peru}) => {
  return (
    <div>
        <tr className='tablehead'>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>marital</th>
            <th>gender</th>
        </tr>
        <tr>
            <td>{peru}</td>
        </tr>
    </div>
  )
}
export default Table
