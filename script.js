// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:

// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;



const add = (num1, num2) => {return num1 + num2}

const negate = function (num1, num2) {
    return num1 - num2
}

const multiply = function (num1, num2) {
    return num1 * num2
}

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return num + " is an even number"
    } else {
        return num + " is an odd number"
    }
}

const multiplyByTwo = function(num) {
    return num * 2
}

const returnHalf = function(num) {
    return num/2
}

const isGreaterThanZero = (num) => { if (num > 0) {return true} else {return false} }

const returnSquared = (num) => {return num*num}

function mathOperations(num1, num2, op) {
    if (op == "add" || op == "negate" || op == "multiply") {
        return op(num1, num2, op)
    } else if (op == "multiplyByTwo" || op == "returnHalf" || op == "isGreaterThanZero") {
        return op(num1)
    }
}

const cube = (num) => {return num * num}



console.log(2,3, multiply)

const isPositive = (num) => {
    if (num > 0) {
        return true
    } else if (num < 0) {
        return false
    } else {
        return "Number equals to 0"
    }
}


const isDivisibleByThree = (num) => {if (number % 3 == 0) {
    return true
} else {
    return false
}
}


