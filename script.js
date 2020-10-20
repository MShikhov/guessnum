let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
minValue = (isNaN(minValue)) ? 0 : minValue;
maxValue = (isNaN(maxValue)) ? 100 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`)

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById("btnRetry").addEventListener("click", function () {
  location.reload();
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random() * 3);

      switch (phraseRandom) {
        case 0:
          answerPhrase = `Неверное число🤨`;
          break;
        case 1:
          answerPhrase = `Возникла ошибка🤕`;
          break;
        case 2:
          answerPhrase = `Вы, видимо, запутались?🐤`;
          break;
        case 3:
          answerPhrase = `Ну и что вы загадали?🤔`;
      }
      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const askRandom = Math.round(Math.random() * 2);
      switch (askRandom) {
        case 0:
          askPhrase = `Вы загадали число ${answerNumber}?`;
          break;
        case 1:
          askPhrase = `Ваше число ${answerNumber}?`;
          break;
        case 2:
          askPhrase = `Видимо, это ${answerNumber}?`;
          break;
      }
      answerField.innerText = askPhrase;
    }
  }
});
document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun && minValue != maxValue) {
    maxValue = answerNumber - 1;
    answerNumber = Math.floor((maxValue + minValue) / 2);
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
  }
});
document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    const successRandom = Math.round(Math.random() * 2);
    switch (successRandom) {
      case 0:
        successPhrase = `Это было просто🤥`;
        break;
      case 1:
        successPhrase = `Я всегда угадываю😎`;
        break;
      case 2:
        successPhrase = `Я так и знал😉`;
        break;
    }
    answerField.innerText = successPhrase;
    gameRun = false;
  }
});
