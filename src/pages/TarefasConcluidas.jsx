import { Link } from "react-router-dom";

export default function TarefasConcluidas({ tarefas }) {
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.isCompleted);

    return (
        <div className="TarefasConcluidas">
            <h2>Tarefas Concluídas</h2>
            {tarefasConcluidas.length === 0 ? (
                <p>Nenhuma tarefa concluída.</p>
            ) : (
                <ul>
                    {tarefasConcluidas.map((tarefa) => (
                        <li key={tarefa.id}>{tarefa.tarefa}</li>
                    ))}
                </ul>
            )}

            <Link to="/" className="link-botão">Voltar para a lista de tarefas</Link>
        </div>
    )
}