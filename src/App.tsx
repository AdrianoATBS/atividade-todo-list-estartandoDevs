import { useEffect, useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router-dom';
import TarefasConcluidas from './pages/TarefasConcluidas';

type Tarefa =
{
  id: string;
  tarefa: string
  isCompleted: boolean
}


function App() {
  const [inputValue, setInputValue] = useState('')
  const [tarefa, setTarefa] = useState<Tarefa[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [tarefaEditando, setTarefaEditando] = useState<Tarefa | null>(null);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tarefa));
  }, [tarefa]);

  
  function handlerAdicionaTarefa(inputValue: string) {
    const novaTarefa = {
      id: uuidv4(),
      tarefa: inputValue,
      isCompleted: false
    }
    setTarefa([...tarefa, novaTarefa]);
    setInputValue('')
  }

  function handlerInputChange(event: React.ChangeEvent<HTMLInputElement>)
  {
    setInputValue(event.target.value)
  }
  
  function handlerDeleteTarefa(id: string)
  {
    setTarefa(tarefa.filter(tarefa => tarefa.id !== id));
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

  function handlerEditarTarefa(tarefa: Tarefa) {
    setTarefaEditando(tarefa);
    setInputValue(tarefa.tarefa);
  }

  function handlerSalvarEdicao() {
    if(!tarefaEditando) return;
     setTarefa(tarefa.map(t => {
      if(t.id === tarefaEditando.id) {
        return { ...t, tarefa: inputValue };
      }
        return t;
     }));
     setTarefaEditando(null);
     setInputValue('');
  }

  function handlerOcultarTarefa(id: string)
  {
    setTarefa(tarefa.map(t => {
      if (t.id === id) {
        return { ...t, isHidden: !t.isHidden };
      }
      return t;
    }));
  }


  return (
    <>
    <Routes>
      <Route path="/" element={
      <TodoList tarefa={tarefa} 
        handlerAdicionaTarefa={handlerAdicionaTarefa}
        handlerInputChange={handlerInputChange} 
        inputValue={inputValue}
        handlerDeleteTask={handlerDeleteTarefa}
        handlerConcluirTask={handlerConcluirTarefa}
        handlerEditarTarefa={handlerEditarTarefa}
        handlerSalvarEdicao={handlerSalvarEdicao}
        tarefaEditando={tarefaEditando}
        handlerOcultarTarefa={handlerOcultarTarefa}
        />
      } />

          <Route path="/concluidas" element={<TarefasConcluidas tarefas={tarefa} />} />
    </Routes>

    </>
  )
}

export default App
