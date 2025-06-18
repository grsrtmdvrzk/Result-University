// TASK
//     Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она
//     представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.
//
//     const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

// SOLUTION
const generateHTML = (names) => {
    const listItems = names.map(name => `<li>${name}</li>`).join('')
    return `<ul>${listItems}</ul>`
}