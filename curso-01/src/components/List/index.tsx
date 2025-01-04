import { ITarefa } from "../../types/tarefa"
import Item from "./Item"

function List({tarefas}: {tarefas: ITarefa[]}) {
  return (
    <aside className="text-center">
        <h2 className="font-bold">Estudos do dia: </h2>
        <ul className="flex m-2 gap-2">
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