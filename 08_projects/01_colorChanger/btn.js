const buttons = document.querySelectorAll('.button');
const Body = document.querySelector('body');

buttons.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if (e.target.id === 'grey') {
            Body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            Body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            Body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            Body.style.backgroundColor = e.target.id;
        }
    });
});