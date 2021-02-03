let a;
let operator;
let b;
let res;
let control_1 = 1;
let control_2 = 1;
let control_3 = 1;

while (1) {
  // зациклено пока не получит правильное первое число
  while (control_1) {
    a = prompt("Введите первое число.");
    if (a != null && !isNaN(+a) && isFinite(+a) && typeof +a == "number") {
      control_1 = 0;

      //зациклено пока не получит правильный знак
      while (control_2) {
        operator = prompt("Введите один знак(+ - / *)");
        if (
          operator === "+" ||
          operator === "-" ||
          operator === "*" ||
          operator === "/"
        ) {
          control_2 = 0;

          //зациклено пока не получит правильное второе число
          while (control_3) {
            b = prompt("Введите второе число.");
            if (
              b != null &&
              !isNaN(+b) &&
              isFinite(+b) &&
              typeof +b == "number"
            ) {
              control_3 = 0;

              //функция калькулятора
              switch (operator) {
                case "+":
                  res = +a + +b;
                  break;
                case "-":
                  res = +a - +b;
                  break;
                case "/":
                  res = +a / +b;
                  break;
                case "*":
                  res = +a * +b;
                  break;
                // не имеет смысла?
                // default:
                //   res = "Нет таких действий!";
              }
              alert(res);
            } else {
              alert("Вы или отменили запрос или неверно ввели второе число!");
            }
          }
        } else {
          alert("Вы или отменили запрос или неверно ввели знак!");
        }
      }
    } else {
      alert("Вы или отменили запрос или неверно ввели первое число!");
    }
  }
  control_1 = 1;
  control_2 = 1;
  control_3 = 1;
}
