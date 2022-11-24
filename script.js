const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"

async function carregarFilmes(){
    let resposta = await fetch(url)
    let json = await resposta.json()
    let filmes = json.results
    filmes.forEach(filme => 
        document.querySelector("#filmes-em-alta").innerHTML = 
        document.querySelector("#filmes-em-alta").innerHTML + card(filme)
    )
}

function card(filme){
    let element = `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w200/${filme.poster_path}" alt="poster do filme Top Gun Maverick">
                <p>${filme.title}</p>
                <p>⭐ ${filme.vote_average}</p>
                <a href="#" class="botao">detalhes</a>
            </div>
        `
    return element
}

carregarFilmes()


