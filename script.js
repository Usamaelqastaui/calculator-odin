const display = document.querySelector('#display');
const add = function (num1, num2){
    return num1 + num2;
};

const subtract = function (num1, num2){
    return num1 - num2;
};

const multiply = function (num1, num2){
    return num1 * num2;
};

const divide = function (num1, num2){
    return num1 / num2;
};
let op1 = '';
let op2 = '';
let op = '';
const operate = function (operation , num1 , num2){
    if(!num2){return num1};
    switch(operation){
        case '*':
            op1 = multiply(num1, num2);
            break;
        case '/':
            op1 = divide(num1, num2);
            break;
        case '+':
            op1 = add(num1, num2);
            break;
        case '-':
            op1 = subtract(num1, num2);
            break;
        default:
            return "Not a supported operator";
    }
    op = '';
    op2 = '';
    return op1;
}

const backspace = function (){
    if(!op2){
        op1 = op1.slice(0, op1.length-1);
        display.textContent = op1;
    } else {
        op2 = op2.slice(0, op2.length-1);
        display.textContent = op2;
    }
}


const assignOp = function (e, btn){
    switch(btn.value){
        case 'clear':
            op1 = '';
            op2 = '';
            op = '';
            display.textContent = '0';
            break;
        case 'delete':
            backspace();
            break;
        case '*':
        case '/':
        case '+':
        case '-':
            op = btn.value;
            display.textContent = op;
            break;
        case '=':
            display.textContent = operate(op, parseInt(op1), parseInt(op2));
            break;
        default:
            if(op === ''){
                op1 = op1.concat(btn.value);
                display.textContent = op1;
            } else {
                op2 = op2.concat(btn.value);
                display.textContent = op2;
            }
    };
    console.log(`op1: ${op1}, op2 ${op2}, op: ${op}`);


}
const activateBtns = function (){
    document.querySelectorAll('button').forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            assignOp(e, btn);
        });
    });
}


window.addEventListener('load',(e)=>{
    activateBtns();
});
