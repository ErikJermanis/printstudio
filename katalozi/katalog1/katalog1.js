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
        document.querySelector(".bodyClass").style.overflow = 'hidden';

        document.querySelectorAll('.page').forEach(single => {
            single.style.marginTop = '10px',
            single.style.marginLeft = 'calc((100vw - 158vh) / 2 + 79vh)',
            single.style.width = '79vh',
            single.style.height = '95vh'
        });

        document.querySelectorAll('.pageFront').forEach(single => {
            single.style.width = '79vh',
            single.style.height = '95vh'
        });

        document.querySelectorAll('.pageBack').forEach(single => {
            single.style.width = '75vh',
            single.style.height = '95vh'
        });

        document.querySelector('.btnZoom').innerHTML = "Zumiraj";

        zoom = 1;
    }
};

/*const magnify = (zoom) => {
    let img, glass, w, h, bw;
    img = document.getElementById('pg1');
    
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('s1.jpg')";
    glass.style.width = '158vh'
    glass.style.height = '190vh';
    glass.style.backgroundRepeat = 'no-repeat';
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    console.log(300 < '200vw');

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    const moveMagnifier = (e) => {
        let pos, x, y;

        e.preventDefault();

        pos.getCursorPos(e);
        x = pos.x;
        y = pos.y;

        if (x > img.width - (w / zoom)) {x = img.width - (w / zoom)};
    };
};

magnify(2);*/