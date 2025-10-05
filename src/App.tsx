import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList'

type Tarefa =
{
  id: string;
  tarefa: string
  isCompleted: boolean
}


function App() {
  const [tarefa, setTarefa] = useState<Tarefa[]>([])
  const [inputValue, setInputValue] = useState('')


  function handlerAdicionaTarefa(inputValue: string) {
    const novaTarefa = {
      id: uuidv4(),
      tarefa: inputValue,
      isCompleted: false
    }
    setTarefa([...tarefa, novaTarefa])
  }

  function handlerInputChange(event: React.ChangeEvent<HTMLInputElement>)
  {
    setInputValue(event.target.value)
  }
  function handlerDeleteTarefa(id: string)
  {
    const tarefasAtualizadas = tarefa.filter(tarefa => tarefa.id !== id)
    setTarefa(tarefasAtualizadas)
  }
  function handlerConcluirTarefa(id: string)
  {
    const tarefasAtualizadas = tarefa.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      }
      return tarefa;
    });
    setTarefa(tarefasAtualizadas);
  }


  return (
    <>
      <TodoList tarefa={tarefa} 
        handlerAdicionaTarefa={handlerAdicionaTarefa}
        handlerInputChange={handlerInputChange} 
        inputValue={inputValue}
        handlerDeleteTask={handlerDeleteTarefa}
        handlerConcluirTask={handlerConcluirTarefa}
        />
    </>
  )
}

export default App
