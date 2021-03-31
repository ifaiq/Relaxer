const container = document.querySelector('.container');
const text = document.querySelector("#text");

const totalT = 3500;
const breathT = (totalT / 5) * 2;
const holdT = (totalT / 5);

breathA();

function breathA() {
    text.innerHTML = 'Breath in';
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = 'Hold';

        setTimeout(() => {
            text.innerHTML = 'Breath Out';
            container.className = 'container shrink'



        },holdT)

    }, breathT)


}


setInterval(breathA,totalT);