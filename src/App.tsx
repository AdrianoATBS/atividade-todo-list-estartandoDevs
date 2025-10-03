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

  function handlerAdicionaTarefa(tarefa: string) {
    const novaTarefa = {
      id: uuidv4(),
      tarefa: tarefa,
      isCompleted: false
    }
    setTarefa([...tarefa, novaTarefa])
  }

  function handlerInputChange(event: React.ChangeEvent<HTMLInputElement>)
  {
    setInputValue(event.target.value)
  }


  return (
    <>
      <TodoList tarefa={tarefa} 
        handlerAdicionaTarefa={handlerAdicionaTarefa}
        handlerInputChange={handlerInputChange} 
        inputValue={inputValue}
        />
    </>
  )
}

export default App
