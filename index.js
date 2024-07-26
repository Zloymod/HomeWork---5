/* ------------------------------ Задания 1 и 2 ------------------------------------*/
const myName = "Денис";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Максим";
const reasonText =
  "Нравиться такой вид деятельности и помимо этого хочу работать не в кустарных условиях, а с комфортом в домашних, либо хотф бы в офисных";
const numberOfMonth = "1";

let text1 = "Всем привет! Меня зовут ";
let text2 = ". Сейчас я изучаю язык программирования ";
let text3 = " на курсе по ";
let text4 = " у ";
let text5 = ". Я хочу стать веб-разработчиком, потому что ";
let text6 = ". До этого я изучал programmingLanguage ";
let text7 = " месяцев. Я уверен, что пройду данный курс до конца!";

let myInfoText = `${text1} ${myName} ${text2} ${programmingLanguage} ${text3} ${programmingLanguage} ${text4} ${courseCreatorName} ${text5} ${reasonText} ${text6} ${numberOfMonth} ${text7}`;
console.log(myInfoText);

// console.log(myInfoText.replaceAll("JavaScript", "javascript"));
// console.log(myInfoText.replaceAll("курс", "КУРС"));

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replaceAll("курс", "КУРС");
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);

/* --------------------------------- Задание 3 и 4-----------------------------*/
const userName = prompt("Введите ваше имя");
console.log(userName.toLocaleLowerCase());
console.log(userName.trim());

let userNafmeFormat = userName.toLocaleLowerCase();
userNafmeFormat = userNafmeFormat.trim();
// alert(`${"Ваше имя:"} ${userNafmeFormat}`);

const userAge = prompt("Сколько вам лет?");
let userAgeFormat = userAge.trim();
userAgeFormat = Number(userAgeFormat);
// console.log(userAgeFormat);
alert(`${"Вас зовут"} ${userNafmeFormat} ${"и вам"} ${userAgeFormat} ${"лет"}`);

// console.log(
//   "userName",
//   userName.toLocaleLowerCase(),
//   userName.trim(),
//   alert(userName)
// );
// console.log(userName);
