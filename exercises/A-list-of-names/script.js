function listOfNames(arrayOfPeople) {
    let content = document.querySelector("#content");

    for (let i = 0; i < people.length; i++) {
        let h1Tag = document.createElement("h1");
        h1Tag.innerHTML = people[i].name;
        let h2Tag = document.createElement("h2");
        h2Tag.innerHTML = people[i].job;
        content.appendChild(h1Tag, h2Tag);
    }
}
let people = [
    { name: "Otto", job: "Developer" },
    { name: "Samantha", job: "French Exchange student" },
    { name: "Tom", job: " Mechanic" },
];

listOfNames(people)