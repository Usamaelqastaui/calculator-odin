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

const operate = function (op, num1 , num2){
    switch(op){
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        default:
            return "Not a supported operator";
    }
}

let op1 = '';
let op2 = '';
let op = '';

const assignOp = function (e, btn){
    switch(btn.value){
        case '*':
        case '/':
        case '+':
        case '-':
            op = btn.value;
            break;
        case '=':
            console.log(operate(op, parseInt(op1), parseInt(op2)));
            break;
        default:
            if(op === ''){
                op1 = op1.concat(btn.value);
            } else {
                op2 = op2.concat(btn.value);
            }
    }
    


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
