function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string vazia ou null
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme.</p>";
        return;
    }

    // Converte o valor para minúsculas para busca case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let sinopse = dado.sinopse.toLowerCase();
        let genero = dado.genero.toLowerCase();

        // Se o título, sinopse ou gênero inclui o termo de busca
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
            // Adiciona o filme encontrado ao resultado, incluindo a capa
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <img src="${dado.capa.replace(/\\/g, '/')}" alt="Capa do filme ${dado.titulo}" style="width:150px;height:auto;">
                <p class="descricao-meta">${dado.sinopse}</p>
                <p>Gênero: ${dado.genero}</p>
                <p>Duração: ${dado.duracao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
