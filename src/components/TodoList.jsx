import { Link } from "react-router-dom";

export default function TodoList({ 
    tarefa, 
    handlerAdicionaTarefa, 
    handlerInputChange, 
    inputValue, 
    handlerDeleteTask, 
    handlerConcluirTask, 
    handlerEditarTarefa,
    handlerSalvarEdicao,
    tarefaEditando,
    handlerOcultarTarefa
}) {

    return(
        <div className="TodoList">
            <h1>Todo List</h1>
            <div className="input-container">
                <input type="text" value={inputValue} onChange={handlerInputChange} placeholder="O que você precisa fazer? " />
                {tarefaEditando ? (
                    <button className="botao botao-salvar" onClick={handlerSalvarEdicao}>Salvar</button>
                ) : (
                    <button onClick={() => handlerAdicionaTarefa(inputValue)}>Adicionar</button>
                )}
            </div>
            <div className="link-container">
                <h2>Tarefas Concluídas</h2>
                <Link className="link-botão" to="/concluidas">
                    Ver Tarefas Concluídas
                </Link>
            </div>

            <div className="tasks-list">
                {tarefa.map((usuario) => (
                    <div key={usuario.id} className="task-item">
                        <input onClick={() => handlerConcluirTask(usuario.id)} type="checkbox" checked={usuario.isCompleted} />
                        <span className={usuario.isCompleted ? 'Concluida' : ''}>{usuario.tarefa}</span>
                        <div className="grupo-botoes">
                            <button className="botao botao-excluir" onClick={() => handlerDeleteTask(usuario.id)}>Excluir</button>
                            <button className="botao botao-ocultar" onClick={() => handlerOcultarTarefa(usuario.id)}>Ocultar</button>
                            <button className="botao botao-editar" onClick={() => handlerEditarTarefa(usuario)}>Editar</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
