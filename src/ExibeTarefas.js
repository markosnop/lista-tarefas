import axios from "axios";
function ExibeTarefas({ tarefas }) {
  const remove = (id) => {
    axios.delete("http://localhost:3000/tarefas/" + id)
  }
  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome_tarefa}
          <i class="bi bi-credit-card-2-front m-4"></i>
          <a href="http://localhost:3000/tarefas/ + id"> 
            <i  class="bi bi-trash m-4" on onClick={() => remove(tarefa.id)}></i>
          </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExibeTarefas;
