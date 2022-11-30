var detalhes = () => {

    var id = localStorage.getItem('filme-id');

    $.ajax({
        url: `https://api.rawg.io/api/games/${id}?key=ea76d3ffd02c458d85491788f40634fa`,
        success: function (data) {
            let str = ' '
            str += `
            <div class="row detalhes">
                <div class="col-12">
                    <h1>${data.name}</h1>
                </div>
                <div class="col-12">
                    <img src="${data.background_image}" class="card-img-top" alt="...">
                </div>
                <div class="texto col-12">
                    <p><h4>Lançamento: </h4>${data.released}</p>
                    <p>${data.description}</p>
                </div>
            </div>
            `

            document.getElementById('detalhes').innerHTML = str;
        }
    })
}
