//Constants

const buttonNumbers = document.getElementsByName('data-number');

const buttonOperations = document.getElementsByName('data-opera');

const buttonEqual = document.getElementsByName('data-equal')[0];

const buttonDelete = document.getElementsByName('data-delete')[0];

//Variables

var result = document.getElementById('result');

var currentOpe = '';

var prevOpe = '';

var operation = undefined;

console.log(result);

//Definitions

buttonNumbers.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        addNumber(button.innerText);
    })
});

buttonOperations.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        selectOperation(button.innerText);
    })
});

buttonEqual.addEventListener('click', function()
{
    calc();
    refreshDisplay();
});

buttonDelete.addEventListener('click', function()
{
    clear();
    refreshDisplay();
});

//Functions

function selectOperation(op)
{
    if(currentOpe === '') return;

    if(prevOpe !== '')
    {
        calc()
    }
    operation = op.toString();
    prevOpe = currentOpe;
    currentOpe = '';
}

function calc()
{
    var calc;
    const previous = parseFloat(prevOpe);
    const current = parseFloat(currentOpe);

    if(isNaN(previous) || isNaN(current)) return;

    switch(operation)
    {
        case '+':
            calc = previous + current
            break;
        
        case '-':
            calc = previous - current
            break;
        
        case 'x':
            calc = previous * current
            break;

        case '/':
            calc = previous / current
            break;

        default:
            return;
    }
    currentOpe = calc;

    operation = undefined;

    prevOpe = '';
}


function addNumber(num)
{
    currentOpe = currentOpe.toString() + num.toString();
    refreshDisplay();
}

function clear()
{
    currentOpe = '';
    prevOpe = '';
    operation = undefined;
}

function refreshDisplay()
{
    result.value = currentOpe;
}