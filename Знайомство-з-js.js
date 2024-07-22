// Знайомство з JS. Змінні. Типи даних. Взаємодія з користувачем
// let age;
// age = '13';

// alert(age);

// let neme;
// neme = 'Oleh';

// alert(neme);

// let isStudent;
// isStudent = 'False';

// alert(isStudent);

// let myString;
// myString = 'Ах ти свиня невдячна. Хочеш більше?! А ми і то заберем.';

// alert(myString);

// let myNumber;
// myNumber = '10';
// myNumber = '20';

// alert(myNumber);

// let = myNull;
// myNull = 'null'

// alert(myNull)//Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

 let confirmMess = confirm('Do you confirm?');
 alert(confirmMess);

 if(confirmMess == true){
    alert('Дякую за підтвердження!')
 } else{
    alert('Дію відмінено!')
 }