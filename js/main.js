const rating = document.querySelectorAll('.circle-btn');
const send = document.querySelector('.btn');
const block  = document.querySelector('.rt1');
const block2  = document.querySelector('.rt2');
let result = 0;

rating.forEach(b => {
    b.addEventListener('click', () => {

        rating.forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');

        const value = Number(b.dataset.value)
        if(value >= 1 && value <= 5){
            result = value;
        } else {
            alert('Press the button!');
        }

    });
});

send.addEventListener('click', () => {
    if(!result) {
        return alert('Choose the rating!');
    } else {
        block.style.display = 'none';
        block2.style.display = 'flex';
        document.querySelector('.selected').textContent = `You selected ${result} out of 5`;
    }
});