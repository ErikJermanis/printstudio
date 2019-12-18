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

        // Click and drag engine
        const mag = document.querySelector('.wrapper');
        mag.style.overflow = 'scroll';

        let startY;
        let startX;
        let scrollLeft;
        let scrollTop;
        let isDown;

        mag.addEventListener('mousedown', (e) => {
            isDown = true;
            startY = e.pageY;
            startX = e.pageX;
            scrollLeft = mag.scrollLeft;
            scrollTop = mag.scrollTop;
        });

        mag.addEventListener('mouseup', () => {
            isDown = false;
        });

        mag.addEventListener('mouseleave', () => {
            isDown = false;
        });

        mag.addEventListener('mousemove', (e) => {
            if(isDown) {
                e.preventDefault();
                const y = e.pageY;
                walkY = y - startY;
                mag.scrollTop = scrollTop - walkY;

                const x = e.pageX;
                const walkX = x - startX;
                mag.scrollLeft = scrollLeft - walkX;
            }
        });

        // Resizing stuff
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
        const mag = document.querySelector('.wrapper');
        mag.style.overflow = 'hidden';

        document.querySelectorAll('.page').forEach(single => {
            single.style.marginTop = '10px',
            single.style.marginLeft = 'calc((100vw - 158vh) / 2 + 79vh)',
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
        });

        document.querySelectorAll('.pageFront').forEach(single => {
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
        });

        document.querySelectorAll('.pageBack').forEach(single => {
            window.innerWidth / window.innerHeight > 1.6 ? single.style.width = '79vh' : single.style.width = '49vw';
            window.innerWidth / window.innerHeight > 1.6 ? single.style.height = '95vh' : single.style.height = '59vw';
        });

        document.querySelector('.btnZoom').innerHTML = "Zumiraj";

        zoom = 1;
    }
};