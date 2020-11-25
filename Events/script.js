const container = document.querySelector('.container');
const content = document.querySelector('.content');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

plus.addEventListener('click', () => {
    let result = content.innerHTML;
    result++;
    content.innerHTML = result;
    if(result >= 10) {
        plus.disabled = true;
    } 
    if(result > 0 ) {
        minus.disabled = false;
        
    }
});

minus.addEventListener('click', () => {
    let result = content.innerHTML;
    result--;
    content.innerHTML = result;
    if(result === -1) {
        minus.disabled = true;
        content.innerHTML = 0;
    }
    if(result < 10) {
        plus.disabled = false;
        
    }
});