function validar(event){
    event.preventDefault()
    let idade = Number(document.querySelector("#idade").value)

    var error = document.querySelector("#idade-error")
    error.innerHTML = ""

    if (idade < 18) error.innerHTML = "não pode tirar habilitação"
}

document.querySelector("#cadastrar")
        .addEventListener("click", validar)

document.querySelector("#idade").addEventListener("blur", validar)
