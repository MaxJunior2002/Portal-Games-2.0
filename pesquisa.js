async function pesquisar() {
    const nome = document.getElementById("pesquisa").value;
    detalhesPesquisa(nome)
    
  
  }

var pesquisa_resultado = () => {

    var nome = localStorage.getItem('filme-nome');

    $.ajax({
        url: `https://api.rawg.io/api/games?key=ea76d3ffd02c458d85491788f40634fa&search=${nome}`,
        success: function (data) {
            alert('Pesquisando...')
            let str = ' '
            str += `
            <div class="row detalhes">
                <div class="col-12">
                    <h1>Resultado da pesquisa: </h1>
                </div>
                <div class="col-12">
                    <h2>${data.results[0].name}</h1>
                </div>
                <div class="col-12 col-sm-6">
                    <img src="${data.results[0].background_image}" class="card-img-top" alt="...">
                </div>
                <div class="col-12 col-sm-6">
                    <p><h4>Lançamento: </h4>${data.results[0].released}</p>
                    <p><a href="#" class="btn btn-dark" target="_blank" onclick="mostrarDetalhes(${data.results[0].id})">Detalhes</a></p>
                </div>
            </div>
            `

            document.getElementById('pesquisa-detalhes').innerHTML = str;
        }
    })

}