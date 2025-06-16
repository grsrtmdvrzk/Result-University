// TASK
//     Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
//
//     Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
//
//     Выведите оба массива в консоль.

// SOLUTION
const massive = [1, 10, 15, -100, -23, 19, 15032]
const newMassive = massive.map(number => number * 1.25)

console.log(massive)
console.log(newMassive)