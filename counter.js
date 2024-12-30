let counter = 0;
const counterValue = document.querySelector('.content__optionally-counter-number');
const incrementBtn = document.querySelector('.btn-plus');
const decrementBtn = document.querySelector('.btn-minus');

decrementBtn.disabled = true;

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    decrementBtn.disabled = false;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
    if (counter == 0 ){
        decrementBtn.disabled = true;
    }

});