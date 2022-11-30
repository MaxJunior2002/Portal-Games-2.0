var carousel = () => {
    $.ajax({
        url: `https://api.rawg.io/api/games?key=ea76d3ffd02c458d85491788f40634fa`,
        success: function (data) {
            let jogo = data.results;
            let str = ' '
            str += `
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                    <div class="col-12 col-sm-6 carousel-imagem"><img src="${jogo[0].background_image} " class=" w-100" alt="..."></div>
                    <div class="col-12 col-sm-6  carousel-descricao">
                        <h3>${jogo[0].name}</h3>
                        <p>Lançamento: ${jogo[0].released}</p>
                        <p>Avaliação: ${jogo[0].rating}</p>
                        <p><a href="#" class="btn btn-dark" target="_blank" onclick="mostrarDetalhes(${jogo[0].id})">Detalhes</a></p>
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                    <div class="col-12 col-sm-6 carousel-imagem"><img src="${jogo[1].background_image} " class=" w-100" alt="..."></div>
                    <div class="col-12 col-sm-6  carousel-descricao">
                        <h3>${jogo[1].name}</h3>
                        <p>Lançamento: ${jogo[1].released}</p>
                        <p>Avaliação: ${jogo[1].rating}</p>
                        <p><a href="#" class="btn btn-dark" target="_blank" onclick="mostrarDetalhes(${jogo[0].id})">Detalhes</a></p>
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                    <div class="col-12 col-sm-6 carousel-imagem"><img src="${jogo[3].background_image} " class=" w-100" alt="..."></div>
                    <div class="col-12 col-sm-6  carousel-descricao">
                        <h3>${jogo[3].name}</h3>
                        <p>Lançamento: ${jogo[3].released}</p>
                        <p>Avaliação: ${jogo[3].rating}</p>
                        <p><a href="#" class="btn btn-dark" target="_blank" onclick="mostrarDetalhes(${jogo[3].id})">Detalhes</a></p>
                    </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            `
            document.getElementById('destaques-itens').innerHTML = str;
        }  
    })
}

var mostrarDetalhes = (id) => {

    localStorage.setItem('filme-id', id);
    window.open("detalhes.html");
}

var publisherDetalhes = (id) => {

    localStorage.setItem('publisher-id', id);
    window.open("publisher.html");
}

var detalhesPesquisa = (nome) => {
    
    localStorage.setItem('filme-nome', nome);
    window.open("detalhes-pesquisa.html");
}

var cards =  () => {

    $.ajax({
        url: `https://api.rawg.io/api/games?key=ea76d3ffd02c458d85491788f40634fa`,
        success: function (data) {
            let str = ' '
            for (let i = 4; i < 23; i++){
                let jogo = data.results[i];
                str += `
                    <div class="card col-sm-12 col-4" style="width: 18rem;">
                        <img src="${jogo.background_image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${jogo.name}</h5>
                            <p class='card-text'>
                                <p>Nota: ${jogo.rating}</p>
                                <p>Lançamento: ${jogo.released}</p>
                            </p>
                            <a href="#" class="btn btn-dark" target="_blank" onclick="mostrarDetalhes(${jogo.id})">Detalhes</a>
                        </div>
                    </div>
                    `
                document.getElementById('jogos-itens').innerHTML = str; 
            }
        }
    })
    }

    $.ajax({
        url: `https://api.rawg.io/api/publishers?key=ea76d3ffd02c458d85491788f40634fa`,
        success: function (data) {
            let str = ' '
            for (let i = 0; i < data.results.length; i++){
                let publishers = data.results[i];
                str += `
                    <div class="card col-sm-12 col-4" style="width: 18rem;">
                        <img src="${publishers.image_background}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${publishers.name}</h5>
                            <p class='card-text'>
                                <p>Games:
                                    <ul>
                                        <li>${publishers.games[0].name}</li>
                                        <li>${publishers.games[1].name}</li>
                                        <li>${publishers.games[3].name}</li>
                                    </ul>
                                </p>
                            </p>
                            <a href="#" class="btn btn-dark" target="_blank" onclick="publisherDetalhes(${publishers.id})">Detalhes</a>
                        </div>
                    </div>
                    `
                document.getElementById('empresas-itens').innerHTML = str; 
            }
        }
    })

var inicializacao = () => {
    carousel();
    cards();
}



