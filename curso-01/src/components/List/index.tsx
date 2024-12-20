import { useState } from "react"
import Item from "./Item"


function List() {
    const [tarefas, setTarefas] = useState([
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JS',
            tempo: '01:00:00'
        }
    ])

  return (
    <aside>
        <h2 onClick={() => setTarefas([...tarefas,{tarefa: "Estudar ", tempo: "05:00:00"}])}>Estudos do dia</h2>
        <ul>
            {
                tarefas.map((element, index) => (
                    <Item 
                        key={index}
                        {...element}
                    />
                ))
            }
        </ul>
    </aside>
  )
}

export default List