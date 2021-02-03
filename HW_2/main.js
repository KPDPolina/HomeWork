// приоритет у логического И больше чем у ИЛИ

// 'undefined' || null
// 'undefined'
console.log(10 && 'undefined' || null && -1);
// 'false' || 0
// 'false'
console.log(' ' && true && 'false' || 0 && 7);
// false || NaN || 0
// 0
console.log(false && null || NaN && Infinity || 0);
// Infinity && NaN || 5
// 1
console.log(10 / -0 && 9 - '9cm' || 11 % 2);
