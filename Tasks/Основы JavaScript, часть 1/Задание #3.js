// TASK
//     Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):
//         - productName — название товара.
//         - productPrice — стоимость.
//         - productQuantity — количество купленного товара.
//         - resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
//
//     Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:
//         “Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”.

// SOLUTION
const productName = 'Кефир'
const productPrice = 119
const productQuantity = 2
const resultCost = productPrice * productQuantity

const resultString = `Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: 
{resultCost} ₽`