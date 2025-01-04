import React from 'react'

function Item({tarefa, tempo}: {tarefa: string, tempo: number}) {
  return (
    <li className='bg-slate-400 w-max p-3 rounded-md'>
        <h3>Tarefa: {tarefa}</h3>
        <span>Tempo: {tempo}</span>
    </li>
  )
}

export default Item