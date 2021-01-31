/**
 * Let's make a calculator 🧮
 */

type Calculator = 'add'|'substract'|'multiply'|'divide'|'remainder';

function calculate(method:Calculator,num1:number,num2:number):number {
    // switch를 사용!
    let result: number = 0;
    if(method==='add'){
        result = num1 + num2;
    }else if(method === 'substract'){
        result = num1-num2
    }else if(method === 'multiply'){
        result = num1*num2
    }else if(method === 'divide'){
        result = num1/num2
    }else if(method === 'remainder'){
        result = num1%num2
    }
    return result;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
