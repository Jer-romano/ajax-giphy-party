let form = $("#gif-form");
let gifs = $("#gif-box");
let deleteBtn = $("#delete-btn");

form.on("submit", searchHandler);
deleteBtn.on("click", deleteGIFs);
async function searchHandler(e) {
    e.preventDefault();
    let searchTerm = $("#search-term").val();
    let result = await getGIF(searchTerm);
    console.log(result.data.data[0]);
    addGIF(result.data.data[0].id);
}

async function getGIF(term) {
    let termNoSpaces = term.replace(" ", "+");
    let result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${termNoSpaces}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=5`);
    return result;
}

function addGIF(id) {
    let img = document.createElement("img");
    img.src = `https://media.giphy.com/media/${id}/giphy.gif`;
    gifs.append(img);
}

function deleteGIFs() {
    gifs.empty();
}