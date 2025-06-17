// TASK
//     Даны объекты:
//         const obj = {
// 	           age: 22,
// 	           favColor: 'red',
// 	           height: 188,
// 	           pet: 'dog',
//             money: 12300
//         };
//
//         const updateObj = {
// 	           age: 23,
// 	           favColor: 'blue',
// 	           money: 11450
//         };
//
//         const obj2 = {/* ... */};
//         console.log(obj2);
//         /**
//         *    {
//         *    age: 23,
//         *    favColor: 'blue',
//         *	height: 188,
//         *	pet: 'dog',
//         *	money: 11450
//         * }
//         */
//
//     Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей
//     как у объекта updateObj.

// SOLUTION
const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};

const updateObj = {
    age: 23,
    favColor: 'blue',
    money: 11450
};

const obj2 = {/* ... */};
console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */

const obj2 = { ...obj, ...updateObj }

console.log(obj2)