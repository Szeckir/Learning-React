import React, { useState } from "react"
import Button from "../Button"
import { ITarefa } from "../../types/tarefa";

interface FormProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Form({ setTarefas }: FormProps) {
    const [inputTempo, setTempo] = useState("");
    const [inputTarefa, setTarefa] = useState("");

    let newTarefa = {
        tarefa: inputTarefa,
        tempo: inputTempo
    }

    const novaTarefa = () => {
        newTarefa = {
            tarefa: inputTarefa,
            tempo: inputTempo
        }
    }
 
    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log('tarefa: ' + inputTarefa);
        console.log('tempo: ' + inputTempo);
        setTarefas(tarefasAntigas => [...tarefasAntigas, {...newTarefa}])
        setTempo('')
        setTarefa('')
    }

    return (
    <form onSubmit={adicionarTarefa} className="p-5 ">
        <div>
            <label htmlFor="tarefa">
                Adicione um novo estudo
            </label>
            <input 
                className="ml-4 border p-1 border-black rounded-md"
                type="text" 
                name="tarefa" 
                placeholder="O que deseja estudar?" 
                required
                value={inputTarefa}
                onChange={(e) => {novaTarefa(); setTarefa(e.target.value)}}
                />
        </div>
        <div className="mb-4">
            <label htmlFor="tempo">
                Tempo
            </label>
            <input
                className="p-1 border border-black ml-4 rounded-md"
                type="number" 
                name="tempo" 
                min="1" 
                max="90" 
                required
                value={inputTempo}
                onChange={(e) => { novaTarefa(); setTempo(e.target.value)}}
                />
        </div>
        <Button type="submit">Adicionar</Button>
    </form>
  )
}

export default Form