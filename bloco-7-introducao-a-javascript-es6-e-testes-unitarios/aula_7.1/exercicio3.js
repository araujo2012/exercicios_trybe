let countLabel = document.querySelector('.count');
let clickCount = parseInt(countLabel.innerText);
const btnClick = document.querySelector('#click-btn');

btnClick.addEventListener('click', () => {
    clickCount += 1;
    countLabel.innerText = `${clickCount}`;
})