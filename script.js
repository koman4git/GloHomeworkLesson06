'use strict';
const botNumber =  parseInt(Math.random() * 100);
let countGuess = 10,
    counter = 10;

function guessNumber (num) {
  let userNumber = prompt('Угадай число от 1 до 100');
       
  if (userNumber === null) {
    alert('Игра окончена!!');
    return;
  } else if (userNumber > num && userNumber !== '' && countGuess > 0) {
    countGuess -= 1;
    alert('Загаданное число меньше' + ', ' + 'осталось попыток' + ' ' + countGuess);
    
  } else if (userNumber < num && userNumber !== '' && countGuess > 0) {
    countGuess -= 1;
    alert('Загаданное число больше' + ', ' + 'осталось попыток' + ' ' + countGuess);
    
  } else if (userNumber == num) {
    if (confirm('Поздравляю, Вы угадали' + ' ' + 'за' + ' ' + (counter - countGuess) + ' ' + 'попыток' + '. ' + '' + 'Хотите сыграть еще?')) {
      countGuess += (counter - countGuess);
      guessNumber(num);
      
    } else {
      alert('Игра окончена!!');
      return;
    }
    
  } else if (countGuess == 0) {
    if (confirm('Вы использовали все попытки! Хотите сыграть еще?)')) {
      countGuess += (counter - countGuess);
    } else {
      alert('Игра окончена!!');
      return;
    }
            
  } else {
    alert('Введи число');
  }
    
  guessNumber(num);
}
  
guessNumber(botNumber);
