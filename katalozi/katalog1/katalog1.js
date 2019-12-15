let i = 1;
let zoom = 1;

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

const toggleZoom = () => {
    if (zoom) {
        document.querySelector(".bodyClass").style.overflow = 'scroll';

        document.querySelectorAll('.page').forEach(single => {
            single.style.marginTop = '0px',
            single.style.marginLeft = '158vh',
            single.style.width = '158vh',
            single.style.height = '190vh'
        });

        document.querySelectorAll('.pageFront').forEach(single => {
            single.style.width = '158vh',
            single.style.height = '190vh'
        });

        document.querySelectorAll('.pageBack').forEach(single => {
            single.style.width = '158vh',
            single.style.height = '190vh'
        });

        document.querySelector('.btnZoom').innerHTML = "Odzumiraj";

        zoom = 0;
    } else {
        console.log(window.innerWidth);
        document.querySelector(".bodyClass").style.overflow = 'hidden';

        document.querySelectorAll('.page').forEach(single => {
            single.style.marginTop = '10px',
            single.style.marginLeft = 'calc((100vw - 158vh) / 2 + 79vh)',
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
            /*single.style.width = '79vh',
            single.style.height = '95vh'*/
        });

        document.querySelectorAll('.pageFront').forEach(single => {
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
            /*single.style.width = '79vh',
            single.style.height = '95vh'*/
        });

        document.querySelectorAll('.pageBack').forEach(single => {
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
            /*single.style.width = '79vh',
            single.style.height = '95vh'*/
        });

        document.querySelector('.btnZoom').innerHTML = "Zumiraj";

        zoom = 1;
    }
};