const button = document.querySelector(".button-add");
const input = document.querySelector(".input-tarefa");
const lista = document.querySelector(".lista-tarefas");

let listaTarefas = [];

function deletarTarefa(indice) {
  listaTarefas.splice(indice, 1);
  mostrarTarefas();
}

function addTarefa() {
  listaTarefas.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefas();
}

function concluirTarefa(indice) {
  listaTarefas[indice].concluida = !listaTarefas[indice].concluida;
  mostrarTarefas();
}

function adicionarTarefaAoPressionarEnter(event) {
  if (event.key === "Enter") {
    addTarefa();
  }
}

function definirPrazo(){
  
}

function mostrarTarefas() {
  let novaTarefa = "";

  listaTarefas.forEach((tarefa, indice) => {
    novaTarefa =
      novaTarefa +
      `  
      <li class="tarefa ${tarefa.concluida ? "done" : ""}">
        <img src="./img/check.png" alt="Tarefa concluída" onclick="concluirTarefa(${indice})" />
        <p>${tarefa.tarefa}</p>
        <img src="/img/trash-bin-3.png" alt="Remover tarefa" onclick="deletarTarefa(${indice})"/>
      </li>
    `;
  });

  lista.innerHTML = novaTarefa;

  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

function carregarTarefas() {
  const tarefas = localStorage.getItem("listaTarefas");
  if (tarefas) {
    listaTarefas = JSON.parse(tarefas);
  }

  mostrarTarefas();
}

carregarTarefas();
button.addEventListener("click", addTarefa);
input.addEventListener("keydown", adicionarTarefaAoPressionarEnter);
