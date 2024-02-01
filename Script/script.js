
function getCharacter() {
    const getCharacterInput = document.getElementById('characterName');
    const characterInfo = document.getElementById('characterInfo');

    const characterName = getCharacterInput.value.toLowerCase();

    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => response.json())
        .then(data => {
            if(data){
                characterInfo.innerHTML =""
                const {name, status, species, gender, originName, image}=data
                characterInfo.innerHTML =`
                <figure>
                <img src="${image}" alt="${name}">
                <figcaption>
                <h2>${name}</h2>
                <p>Status: ${status}</p>
                <p>Species: ${species}</p>
                <p>Gender :${gender}</p>
                </figcaption>
                </figure>`
            }else{
                characterInfo.innerHTML="No character found with that name."
            }
            /*const results = data.results;
            
            if (results.length > 0) {
                
                const charactersList = results.map(character => `
                    <li>
                        <h2>Nombre: ${character.name}</h2>
                        <p>Status: ${character.status}</p>
                        <p>Species: ${character.species}</p>
                        <p>Gender: ${character.gender}</p>
                        <p>Origin: ${character.origin.name}</p>
                        <img src="${character.image}" alt="${character.name}" />
                    </li>
                `).join('');

                
                characterInfo.innerHTML = `<ul>${charactersList}</ul>`;
            } else {
                characterInfo.innerHTML = `<p>No se encontraron personajes con ese nombre.</p>`;
            }*/

        })
        .catch(error => characterInfo.innerHTML = `<p>Imposible acceder al personaje</p>`);
}
