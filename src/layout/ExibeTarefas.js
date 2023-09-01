import { Link } from "react-router-dom";
import tarefaService from "../services/tarefas";

function ExibeTarefas({ tarefas, setTarefas }) {

const [showConfirmation, setShowConfirmation ] = useState (false)
const [taskIdToDelete, setTaskIdToDelete ] = useState (null)

const openConfirmation= (id) => {
  setTaskIdToDelete(id)
  setShowConfirmation(true)
}
 const closeConfirmation = () => {
  setTaskIdToDelete(null)
  setShowConfirmation(false)
 }

  const confirmdelete = ()=>{
    if(taskIdToDelete !== null) 
    tarefaService
    .remove(taskIdToDelete).then(() => {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }).catch((error) => console.error(error));
  };

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.nome_tarefa}
            <Link to={`http://localhost:3000/${tarefa.id}`}>
              <i className="bi bi-pencil m-2 text-primary-emphasis"></i>
            </Link>
            <i
              className="bi bi-trash m-2 text-danger"
              onClick={() => remove(tarefa.id)}
              style={{ cursor: 'pointer' }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExibeTarefas;
