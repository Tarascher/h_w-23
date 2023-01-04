let result = Math.random();
result = result * 100;
result = Math.floor(result) + 1;
console.log(result);
let count = 1;

function calc() {
  let numberYour = +numberInput.value;
  resultInput.innerHTML = numberYour;

  if (numberYour == result) {
    infotInputInfo2.innerHTML = `вы угодали`;
    infotInputInfo.innerHTML = `вы угодали`;
    return;
  } else if (numberYour > result) {
    infotInputInfo.innerHTML = `он  больше от загаданного`;
  } else {
    infotInputInfo.innerHTML = `он меньше  от загаданного`;
  }
  resultCount.innerHTML = count;

  if (count == 10) {
    infotInputInfo2.innerHTML = `вы  не угодали , ваше число было ${result}`;

    return;
  }

  count++;
}
