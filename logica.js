function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada
  
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o usuário inseriu algum termo
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar uma palavra.</p>";
      return; // Encerra a função se o campo estiver vazio
    }
  
    // Normaliza o termo de pesquisa para letras minúsculas,
    // permitindo que a pesquisa seja case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada item do conjunto de dados
    for (let dado of dados) {
      // Normaliza os campos Nome e Descrição para letras minúsculas
      nome = dado.Nome.toLowerCase();
      descricao = dado.Descrição.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no nome ou descrição
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Cria a estrutura HTML para um resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.Link}" target="_blank">${dado.Nome}</a>
            </h2>
            <div class="container">
              <img src="${dado.Imagem}" alt="Descrição da Imagem" width="150px" height="200px">
              <p class="descricao-meta">${dado.Descrição} <br> <br>
                Criação: ${dado.Criação} <br>
                Paradigmas: ${dado.Paradigmas} <br>
                Uso: ${dado.Uso}
              </p>
            </div>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      resultados = "<p> Nenhum resultado foi encontrado com base na pesquisa.</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }