import React, { useState } from 'react'

export default function Message() {
  const [message] = useState([
    {id:'001'},
    {id:'002'},
    {id:'003'},
    {id:'004'},
  ])
  return (
    <div>
      <ul>
        {
        message.map((m) => {
          return (
            <li key={m.id}>
              
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}
