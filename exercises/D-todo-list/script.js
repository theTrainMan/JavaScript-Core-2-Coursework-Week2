function todoList(todos) {
    // Write your code here...
    let todosList = document.createElement("ul");
    for (let i = 0; i < todos.length; i++) {
        let todoslist = document.createElement("li");
        todoslist.innerText = todos[i].todo;
        todoslist.addEventListener("click", function() {
            let lastDecor = todoslist.style.textDecoration;
            if (lastDecor == "line-through") {
                todoslist.style.textDecoration = "none";
            } else {
                todoslist.style.textDecoration = "line-through";
            }
        });

        todosList.appendChild(todoslist);
    }

    let divEl = document.getElementById("content");
    divEl.appendChild(todosList);
}

const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" }
];

todoList(todos);