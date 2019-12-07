let i = 1;

const turnFwd = () => {
    if (i < 25) {
        const turn = document.querySelector(`#page${i}`);
        const zout = document.querySelector(`#page${i + 1}`)
        turn.classList.add('fliped');
        i < 24 ? zout.style.zIndex = 0 : 1;
        i++;
    };
};

const turnBwd = () => {
    if (i > 1) {
        const turn = document.querySelector(`#page${i - 1}`);
        const zout = document.querySelector(`#page${i}`)
        i < 25 ? zout.style.zIndex = -1 : 1;
        turn.classList.remove('fliped');
        i--;
    };
};