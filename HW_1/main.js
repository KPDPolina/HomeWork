// Выведет строку 10
console.log("" + 1 + 0);
// Выведет число 1
console.log("" - 1 + 0);
// Выведет число 1
console.log(true + false);
// Будет ошибка
console.log(6 / "3");
// Выведет число 6
console.log("2" * "3");
// так как в выражении есть строка то оба плюса это конкатенация.
// Выведет 45px
console.log(4 + 5 + "px");
// Выведет $45
console.log("$" + 4 + 5);
// Выведет число 2
console.log("4" - 2);
// Будет ошибка
console.log("4px" - 2);
// Выведет undefined
console.log(7 / 0);
// Выведет строку " -9 5"
console.log(" -9 " + 5);
// Выведет число -14
console.log(" -9 " - 5);
// null преобразуется в 0. И тогда выведет число 1
console.log(null + 1);
// Выведет undefined
console.log(undefined + 1);
// \t -табуляция; \n - перенос строки.
// В итоге строка без чисел и букв преобразуется в 0.
// Выведет число -2
console.log(" \t \n" - 2);