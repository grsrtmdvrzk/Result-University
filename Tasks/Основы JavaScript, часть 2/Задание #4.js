// TASK
//     Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры
//     name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку
//     "Hello, someone!".
//
//     Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

// SOLUTION
// function sayHello (name) {
//     return name && name.length > 0 ? `Hello, ${name}!` : 'Hello, someone!'
// }

const sayHallo = (name) => {
    return name && name.length > 0 ? `Hello, ${name}!` : 'Hello, someone!'
}