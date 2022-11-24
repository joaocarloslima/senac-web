let tarefas = Array.from (document.querySelectorAll(".card"))

document.querySelector("#busca").addEventListener('input', () => {
    let busca = document.querySelector("#busca").value.toLowerCase()

    for(let tarefa of tarefas){
        let titulo = tarefa.querySelector("h2").innerHTML.toLowerCase()
        let estilo = titulo.includes(busca) ? "flex" : "none"
        tarefa.style.display = estilo
    }
})

function mostrar(criterio){
    let habilitado = (criterio !== "pendentes")
    let cards = document.querySelector("#tarefas")
    cards.innerHTML = ''

    tarefas.forEach( tarefa => {
        if (tarefa.querySelector("button").disabled === habilitado)
            cards.appendChild(tarefa)
    })

}

document.querySelector("#pendentes").addEventListener('click', () => mostrar("pendentes"))
document.querySelector("#finalizadas").addEventListener('click', () => mostrar("finalizadas"))
