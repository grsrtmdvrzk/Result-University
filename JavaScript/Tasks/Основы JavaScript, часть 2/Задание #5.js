// TASK
//     Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной
//     операции (+, -, /, *) возвращаем необходимый результат выражения с числами.
//
//     function calc(a, b, operation) {
//         // Ваш код здесь...
//     }
//
//     console.log(calc(1, 2, '+')); // 3
//     console.log(calc(1, 2, '-')); // -1
//     console.log(calc(2, 2, '*')); // 4
//     console.log(calc(4, 2, '/')); // 2

// SOLUTION
function calc(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Unknown operation'
    }
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2