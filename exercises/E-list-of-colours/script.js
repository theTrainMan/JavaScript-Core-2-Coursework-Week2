function listOfColours(colours) {
    // Write your code here...
    let selectTag = document.createElement("select");
    let content = document.getElementById("content");
    colours.forEach((color) => {
        let optionTag = document.createElement("option");
        optionTag.textContent = color;
        selectTag.appendChild(optionTag);

        selectTag.addEventListener("change", function() {
            content.style.backgroundColor = selectTag.value;
        });
    });

    content.appendChild(selectTag);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);