const botao = document.querySelector("#botaoAdicionar")

botao.addEventListener("click", (e) => {
    e.preventDefault()
    let titulo = document.querySelector("#titulo").value
    let pontos = document.querySelector("#pontos").value

    const tarefa = {
        titulo: titulo,
        pontos: pontos

    }
    const card = Card(tarefa)

    document.querySelector("#tarefas").appendChild(card)

   
})