let pontos = 0

const botao = document.querySelector("#botaoAdicionar")

botao.addEventListener("click", (e) => {
    e.preventDefault()
    let titulo = document.querySelector("#titulo").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        pontos,
        categoria
    }
    const card = Card(tarefa)

    document.querySelector("#tarefas").appendChild(card)

   
})