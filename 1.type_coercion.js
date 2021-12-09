var a = {
    valueOf: function() {
        return 'hello';
    }
};
var b = {
    valueOf: function() {
        return 3;
    }
};
var c = {
    valueOf: function() {
        return new Number(3);
    }
};
var d = {
    toString: function() {
        return 123;
    }
};
var e = {
    toString: function() {
        return new Number(3);
    }
};


// binary + operator

(null + undefined) // NaN
(null + true) // 1
(null + false) // 0
(null + 3) // 3
(null + NaN) // NaN
(null + 'hello') // nullhello
console.log(null + a + b + c + d + e + f) // TypeError
(undefined + true) // NaN
(undefined + false) // NaN
(undefined + 5) // NaN
(undefined + NaN) // NaN
(undefined + 'hello') // undefinedhello
(undefined + a + b + c + d + e + f) // TypeError
(true + false) // 1
(true + 2) // 3
(true + NaN) // NaN
(true + 'hello') // truehello
(true + a + b + c + d + e + f) // TypeError
(false + 4) // 4
(false + NaN) // NaN
(false + 'hello') // falsehello
(false + a + b + c + d + e + f) // TypeError
(5 + 3) // 8
(5 + NaN) // NaN
(5 + 'hello') // 5hello
(5 + a + b + c + d + e + f) // TypeError
('hello' + NaN) // helloNaN
('hello' + a + b + c + d + e + f) // 'hello' + a + b + c + d + e + f


// binary - operator

(null - undefined) // NaN
(null - true) // -1
(null - false) // 0
(null - 3) // -3
(null - NaN) // NaN
(null - 'hello') // NaN
// (null - a - b - c - d - e - f) // ReferenceError
(undefined - true) // NaN
(undefined - false) // NaN
(undefined - 5) // NaN
(undefined - NaN) // NaN
(undefined - 'hello') // NaN
// (undefined - a - b - c - d - e - f) // ReferenceError
(true - false) // 1
(true - 2) // -1
(true - NaN) // NaN
(true - 'hello') // NaN
// (true - a - b - c - d - e - f) // ReferenceError
(false - 4) // -4
(false - NaN) // NaN
(false - 'hello') // NaN
// (false - a - b - c - d - e - f) // ReferenceError
(5 - 3) // 2
(5 - NaN) // NaN
(5 - 'hello') // NaN
// ('hello' + a + b + c + d + e + f) // ReferenceError
('hello' - NaN) // NaN
// ('hello' - a - b - c - d - e - f) // ReferenceError



// binary * operator

(null * undefined) // NaN
(null * true) // 0
(null * false) // 0
(null * 3) // 0
(null * NaN) // NaN
(null * 'hello') // NaN
// (null * a * b * c * d * e * f) // ReferenceError
(undefined * true) // NaN
(undefined * false) // NaN
(undefined * 5) // NaN
(undefined * NaN) // NaN
(undefined * 'hello') // NaN
// (undefined * a * b * c * d * e * f) // ReferenceError
(true * false) // 0
(true * 2) // 2
(true * NaN) // NaN
(true * 'hello') // NaN
// (true * a * b * c * d * e * f) // ReferenceError
(false * 4) // 0
(false * NaN) // NaN
(false * 'hello') // NaN
// (false * a * b * c * d * e * f) // ReferenceError
(5 * 3) // 15
(5 * NaN) // NaN
(5 * 'hello') // NaN
// ('hello' + a + b + c + d + e + f) // ReferenceError
('hello' * NaN) // NaN
// ('hello' * a * b * c * d * e * f) // ReferenceError



// binary / operator

(null / undefined) // NaN
(null / true) // 0
(null / false) //NaN
(null / 3) // 0
(null / NaN) // NaN
(null / 'hello') // NaN
// (null / a / b / c / d / e / f) // ReferenceError
(undefined / true) // NaN
(undefined / false) // NaN
(undefined / 5) // NaN
(undefined / NaN) // NaN
(undefined / 'hello') // NaN
// (undefined / a / b / c / d / e / f) // ReferenceError
(true / false) // Infinity
(true / 2) // 0.5
(true / NaN) // NaN
(true / 'hello') // NaN
// (true / a / b / c / d / e / f) // ReferenceError
(false / 4) // 0
(false / NaN) // NaN
(false / 'hello') // NaN
// (false / a / b / c / d / e / f) // ReferenceError
(5 / 3) // 1.666..
(5 / NaN) // NaN
(5 / 'hello') // NaN
// ('hello' + a + b + c + d + e + f) // ReferenceError
('hello' / NaN) // NaN
// ('hello' / a / b / c / d / e / f) // ReferenceError


// binary % operator

(null % undefined) // NaN
(null % true) // 0
(null % false) //NaN
(null % 3) // 0
(null % NaN) // NaN
(null % 'hello') // NaN
// (null % a % b % c % d % e % f) // ReferenceError
(undefined % true) // NaN
(undefined % false) // NaN
(undefined % 5) // NaN
(undefined % NaN) // NaN
(undefined % 'hello') // NaN
// (undefined % a % b % c % d % e % f) // ReferenceError
(true % false) // NaN
(true % 2) // 1
(true % NaN) // NaN
(true % 'hello') // NaN
// (true % a % b % c % d % e % f) // ReferenceError
(false % 4) // 0
(false % NaN) // NaN
(false % 'hello') // NaN
// (false % a % b % c % d % e % f) // ReferenceError
(5 % 3) // 2
(5 % NaN) // NaN
(5 % 'hello') // NaN
// ('hello' + a + b + c + d + e + f) // ReferenceError
('hello' % NaN) // NaN
// ('hello' % a % b % c % d % e % f) // ReferenceError


// unary - operator

(-null) // -0
(-undefined) // NaN
(-true) // -1
(-false) // -0
(-5) // -5
(-'hello') // NaN
(-'234') // -234
(-'234.32e3') // -234320
(-new Number(NaN)) // NaN
(-new String('hello')) // NaN
(-(/google.com/)) // NaN
(-([])) // -0
(-([2])) // -2
(-([2, 3])) // NaN
(-(function() { })) // NaN
(-(c)) // ReferenceError

++null) // SyntaxError
++undefined) // NaN
++true) // SyntaxError
++false) // SyntaxError
++5) // SyntaxError
++'hello') // SyntaxError
++'234') // SyntaxError
++'234.32e3') // SyntaxError
++new Number(NaN)) // SyntaxError
++new String('hello')) // SyntaxError
++(/google.com/)) // SyntaxError
++([])) // SyntaxError
++([2])) // SyntaxError
++([2, 3])) // SyntaxError
++(function() { })) // SyntaxError
++(c)) // NaN
