function shoppingList(arrayOfPeople) {
    // Write your code here...
    let shoppingList = document.createElement('ul');
    for (let i = 0; i < arrayOfPeople.length; i++) {
        let listItems = document.createElement('li');
        listItems.textContent = arrayOfPeople[i];
        shoppingList.appendChild(shoppingList);
    }
    let itemsBox = document.getElementById('content');
    itemsBox.appendChild(shoppingList)
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);