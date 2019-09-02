function sum(firstNumber) {

    let foo = function  (secondNumber) {
        return sum(firstNumber+secondNumber);
    };

    foo.valueOf = () => firstNumber;
    foo.toString = () => firstNumber;

    return foo;
}


console.log(sum(4)(5)(2));
console.log(sum(4)(5)(2) == 11);
console.log(sum(4)(5)(2)(11) == 22);

