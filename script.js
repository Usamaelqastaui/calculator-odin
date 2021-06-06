Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
};

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
    if(num2 == 0){
        return '';
    }
    return num1 / num2;
};
let op1 = '';
let op2 = '';
let op = '';
const operate = function (operation , num1 , num2){
    if(!num2 && num2 !== 0){return num1};
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

const displayContent = function(item){
    // if(!isNaN(item) && item !== ''){
    //     if(item%1 !== 0){
    //         display.textContent = item.round(3);
    //     }
    // }

    display.textContent = item;
};

const assignOp = function (e, btn){
    switch(btn.value){
        case 'clear':
            op1 = '';
            op2 = '';
            op = '';
            displayContent('0');
            break;
        case 'delete':
            backspace();
            break;
        case '*':
        case '/':
        case '+':
        case '-':
            if(op){
                displayContent(operate(op, parseInt(op1), parseInt(op2)));  
            }
            if(!op1 && op1 !== 0){
                break;
            }
            op = btn.value;
            break;
        case '=':
            if(!op1){
                return alert("no numbers entered");
                
            }
            displayContent(operate(op, parseInt(op1), parseInt(op2)));  
            break;
        default:
            if(op === ''){
                op1 = op1.concat(btn.value);
                displayContent(op1);
            } else {
                op2 = op2.concat(btn.value);
                displayContent(op2);
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
