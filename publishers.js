var detalhesPublishers = () => {

    var id = localStorage.getItem('publisher-id');

    $.ajax({
        url: `https://api.rawg.io/api/publishers/${id}?key=ea76d3ffd02c458d85491788f40634fa`,
        success: function (data) {
            let str = ' '
            str += `

            <div class="row detalhes">
                <div class="col-12">
                    <h1>${data.name}</h1>
                </div>
                <div class="col-12">
                    <img src="${data.image_background}" class="card-img-top" alt="...">
                </div>
                <div class="col-12">
                    <p>${data.description}</p>
                </div>
            </div>
            `

            document.getElementById('detalhes-publisher').innerHTML = str;
        }
    })
}