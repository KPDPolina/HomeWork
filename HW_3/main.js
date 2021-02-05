let a;
let operator;
let b;
let res;
// функции
function isNumber(v) {
  return !isNaN(+v) && isFinite(+v) && typeof +v == "number";
}
function isCanceled(v) {
  return v !== null;
}
function calculate(x, z, y) {
  switch (z) {
    case "+":
      res = +x + +y;
      break;
    case "-":
      res = +x - +y;
      break;
    case "/":
      res = +x / +y;
      break;
    case "*":
      res = +x * +y;
      break;
  }
  return res;
}
function isOperator(v) {
  return (
    v === "+" || v === "-" || v === "*" || v === "/"
  );
}
// проверка первого числа
a = prompt("Введите первое число.");
if (isCanceled(a)) {
  if (isNumber(a)) {
    // проверка знака
    operator = prompt("Введите один знак(+ - / *)");
    if (isCanceled(operator)) {
      if (isOperator(operator)) {
        // проверка второго числа
        b = prompt("Введите второе число.");
        if (isCanceled(b)) {
          if (isNumber(b)) {
            // функция калькулятора
            calculate(a, operator, b);
            alert(res);
          } else {
            alert("Вы неверно ввели второе число!");
          }
        } else {
          alert("Вы отменили запрос!");
        }
      } else {
        alert("Вы неверно ввели знак!");
      }
    } else {
      alert("Вы отменили запрос!");
    }
  } else {
    alert("Вы неверно ввели первое число!");
  }
} else {
  alert("Вы отменили запрос!");
}
