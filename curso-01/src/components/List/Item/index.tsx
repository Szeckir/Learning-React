import React from 'react'

function Item({tarefa, tempo}: {tarefa: string, tempo: number}) {
  return (
    <li>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}

export default Item