document.getElementById("character-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let race = document.getElementById("race").value;
    let charClass = document.getElementById("class").value;
    let bio = document.getElementById("bio").value;

    let character = { name, race, charClass, bio };

    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    characters.push(character);
    localStorage.setItem("characters", JSON.stringify(characters));

    displayCharacters();
    this.reset();
});

function displayCharacters() {
    let characterList = document.getElementById("character-list");
    characterList.innerHTML = "";
    let characters = JSON.parse(localStorage.getItem("characters")) || [];

    characters.forEach((char, index) => {
        let li = document.createElement("li");
        li.textContent = `${char.name} - ${char.race} - ${char.charClass}`;
        characterList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayCharacters);
