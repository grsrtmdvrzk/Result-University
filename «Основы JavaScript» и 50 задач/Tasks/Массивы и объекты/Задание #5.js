// TASK
//     Дан объект:
//         const obj = {
//             age: 22,
// 	           favColor: 'red',
// 	           height: 188,
// 	           pet: 'dog',
// 	           money: 12300
//         };
//
//     Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.

// SOLUTION
const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
}

const { age, favColor, height, pet, money } = obj

console.log(age, favColor, height, pet, money)