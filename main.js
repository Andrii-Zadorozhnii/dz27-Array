let shoppingList = [
    { name: "Молоко", quantity: 2, bought: true, price: 25, sum: 50 },
    { name: "Хліб", quantity: 1, bought: false, price: 15, sum: 15 },
    { name: "Яйця", quantity: 12, bought: true, price: 2.5, sum: 30 },
    { name: "Томат", quantity: 2, bought: false, price: 2.5, sum: 30 },
    { name: "Арбуз", quantity: 1, bought: false, price: 5, sum: 5 },
    { name: "Масло", quantity: 1, bought: true, price: 6, sum: 1 },
    { name: "Рыба", quantity: 4, bought: true, price: 2, sum: 8 },
    { name: "Колбаса", quantity: 1, bought: false, price: 10, sum: 10 },
];

let showShoppingListButton = document.querySelector('.section-one__button');
let inputItemStatus = document.querySelector('.section-two__input');
let changeStatusButton = document.querySelector('.section-two__button');
let inputDeleteitem = document.querySelector('.section-two__input-delete');
let deleteItemName = document.querySelector('.section-three__input');
let deleteItemFromListButton = document.querySelector('.section-three__button');
let updatedList;


showShoppingListButton.onclick = () => { buyList() };
changeStatusButton.onclick = () => { changeBoughtStatus() };
deleteItemFromListButton.onclick = () => { deleteItemFromList() };


// inputItemStatus.addEventListener('input', () => {
//     console.log(`Вы ввели: ${inputItemStatus.value}`);
// })

// deleteItemName.addEventListener('input', () => {
//     console.log(`Вы хотите удалить: ${deleteItemName.value}`);
// })

// Выводим список покупок с разделением на купленное и что нужно еще купить

function buyList() {
    console.log("-----------------")
    console.log("Что нужно купить:")
    console.log("-----------------")
    for (i = 0; i < shoppingList.length; i++) {

        if (!shoppingList[i].bought) {
            console.log(`${shoppingList[i].name}: ${shoppingList[i].quantity}шт, цена ${shoppingList[i].price}грн`);
        }
    }
    console.log("-----------------")
    console.log("Что уже купили:");
    console.log("-----------------")
    for (i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].bought) {
            console.log(`${shoppingList[i].name}: ${shoppingList[i].quantity}шт, цена ${shoppingList[i].price}грн`);
        }
    }
    console.log(shoppingList);
}


// Изменение состояния продукта при покупке
function changeBoughtStatus() {
    console.log(`Вы ввели: ${inputItemStatus.value}`);
    for (let i = 0; i < shoppingList.length; i++) {
        if ((inputItemStatus.value.toUpperCase()).includes((shoppingList[i].name).toUpperCase())) {
            console.log(`Статус товара до покупки: ${shoppingList[i].bought}`);
            shoppingList[i].bought = true;
            console.log(`Куплено '${shoppingList[i].name}', ты молодец =)`);
            console.log(`Статус товара после покупки: ${shoppingList[i].bought}`);
        }

    }
}



// Удаление продукта из списка и создание нового списка
function deleteItemFromList() {
    console.log(`Вы хотите удалить: ${deleteItemName.value}`);
    updatedList = shoppingList.filter(product => product.name.toUpperCase() !== deleteItemName.value.toUpperCase());
    console.log(updatedList);
    return updatedList;
}

