// var pizza = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var DevenSpecial = pizzaOven("deep dish", "marinara", "mozzarella", ["mushrooms", "onions"]);
console.log(DevenSpecial);
var TylersChoice = pizzaOven("chicago style ifkyk", "marinara", "mozzarella",["mushrooms", "italian sausage", "onions"]);
console.log(TylersChoice);

function randomPick(arr) {
    var pick = Math.floor(Math.random() * arr.length);
    return pick;
}
function randomPizza(crustType, sauceType, cheeses, toppings) {
    var pizza2 = {};
    pizza2.crustType = randompick(crustType);
    pizza2.sauceType = randompick(sauceType);
    pizza2.cheeses = [];
    pizza2.toppings = [];
    for (var i=0; i < pickRange(3,0); i++){
        pizza2.cheeses.push(randomPick(cheeses));
        return pizza2;
    }
    for (var i=0; i < pickRange(5,1); i++){
        pizza2.toppings.push(randomPick(toppings));
    }
    return pizza2;
}
console.log(randomPizza)