import { useEffect, useState } from "react";

import ExibeTarefas from "../layout/ExibeTarefas";
import tarefaService from "../services/tarefas";

function Contents({ nome }) {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [error, setError] = useState(null)

  useEffect(() => {
    tarefaService.getAll().then((response) => {
      setTarefas(response.data);
    }).catch((error) => {
      if (error.response) {
        console.error('Error na requisição:',error.response )
      } else if (error.request) {
        console.error('Não foi possivel se conectar ao servidor ')
        setError(
          'Não foi possivel se conectar ao servidor . Verifique sua conexão de rede'
        )
      } else {
        console.error('Error na configuração da requisição:' , error.messange)
      }
    });
  }, []);

  const addTarefa = (event) => {
    event.preventDefault();
    const tarefaObject = {
      nome_tarefa: tarefa,
    };
    //console.log(tarefaObject);
    tarefaService.create(tarefaObject).then((response) => {
      setTarefas([...tarefas, response.data]);
      setTarefa("");
    }).catch((error) => console.error(error));
    

    //console.log(tarefas);

    //console.log("botão clicado", event.target);
  };

  const handleTarefaChange = (event) => {
    console.log(event.target.value);
    setTarefa(event.target.value);
  };

  return (
    <div className="container">
      <h2>Aprendendo React</h2>
      <p>Seja bem vindo, {nome}!</p>
      {error ? (
        <p class="alert alert-warning" role="alert">{error}</p>
      ): (
        <>
      <h3>Lista de tarefas:</h3>
      <ExibeTarefas tarefas={tarefas} setTarefas={setTarefas} />
      <hr />
      <form onSubmit={addTarefa}>
        <div className="mb-3">
          <label htmlFor="tarefa" className="form-label">
            Tarefa:
          </label>
          <input
            type="text"
            placeholder="Digite a tarefa..."
            className="form-control"
            value={tarefa}
            onChange={handleTarefaChange}
          />
          <button className="btn btn-secondary mt-4">Adicionar</button>
        </div>
      </form>
      </>
      )}
    </div>
  );
}

export default Contents;
