// TASK
//     Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца
//     соответственно.
//
//     Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит
//     информацию о нем в консоль: “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”.
//
//    Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
//
//    Выведите циклом все названия свойств и их значения, которые есть у объекта john.

// SOLUTION
const john = {
    name: 'John',
    age: 29,
    pet: 'Charlie'
}

const ann = {
    name: 'Ann',
    age: 24,
    pet: 'Bella'
}

const information = (obj) => console
    .log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`)

const incrementAge = (obj) => obj.age++

information(john)

incrementAge(ann)
console.log(ann.age)

for (const key in john) {
    console.log(`${key}: ${john[key]}`)
}