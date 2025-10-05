export default function TodoList({ 
    tarefa, 
    handlerAdicionaTarefa, 
    handlerInputChange, 
    inputValue, 
    handlerDeleteTask, 
    handlerConcluirTask }) {

    return(
        <div className="TodoList">
            <h1>Todo List</h1>
            <div className="input-container">
                <input type="text" value={inputValue} onChange={handlerInputChange} placeholder="O que você precisa fazer? " />
                <button onClick={() => handlerAdicionaTarefa(inputValue)}>Adicionar</button>
            </div>

            <div className="tasks-list">
                {tarefa.map((usuario) => (
                    <div key={usuario.id} className="task-item">
                        <input onClick={() => handlerConcluirTask(usuario.id)} type="checkbox" checked={usuario.isCompleted} />
                        <span className={usuario.isCompleted ? 'Concluida' : ''}>{usuario.tarefa}</span>
                        <button onClick={() => handlerDeleteTask(usuario.id)} className="bota-excluir">Excluir</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
