let userText = prompt("Введите текст:");
userText = userText.trim();

let wordFromText = prompt("Введите слово из текста");

wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);

let result = userText.slice(0, indexOfWord);
// console.log(indexOfWord);
alert(`"Результат:" ${result}`);
