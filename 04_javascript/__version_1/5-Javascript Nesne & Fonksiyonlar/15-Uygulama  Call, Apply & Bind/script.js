// Demo : Numeric Range

var num ={
    min : 0,
    max : 100,
    checkNumericRange : function(value){
        if (typeof value !== 'number'){
            return false;
        }else{
            return value>=this.min && value<=this.max;
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

var num1 = {min : 10 , max : 30};

console.log(num.checkNumericRange.call(num1,65));
console.log(num.checkNumericRange.apply(num1,[52]));

var checkNumber = num.checkNumericRange.bind(num1);

console.log(checkNumber(56));


