let screen = document.getElementById('screen');
//let buttons = document.getElementsByTagName('button');
let buttons = document.querySelectorAll('button');

let screenValue = "";

for(let item of buttons){
    item.addEventListener('click',(e) => {
        let buttonText = e.target.innerHTML;
        console.log(buttonText);
        
        switch(buttonText){
            case '√':
                buttonText = 'sqrt(';
                screenValue +=buttonText;
                screen.value = screenValue;
                return;
            case 'π':
                buttonText = '3.1416';
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '^':
                buttonText = '';
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '%':
                buttonText = '/100*';
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case 'AC':
                screenValue = '';
                screen.value = screenValue;
                return;
            case 'X':
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
                return;
            case '=':
                screen.value = eval(screenValue);
                return;
            case '⌫':
                screenValue = screenValue.substring(0, screen.value.length -1);
                screen.value = screenValue;
                return;
            default:
                screenValue += buttonText;
                screen.value = screenValue;
                return;
        }
    });
}