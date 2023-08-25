function ExibeTarefas({ tarefas }) {
  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome_tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExibeTarefas;
