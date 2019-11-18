const ucitaj = () => {
    const slika = document.getElementById('canvasFg');
    slika.src = URL.createObjectURL(event.target.files[0]);
};

const displayBg = () => {
    const proizvod = document.getElementById('proizvodInput');
    const background = document.getElementById('canvasBg')

    switch(proizvod.value) {

        case "majica":
            background.src = './tshirt.jpg'
            break;

        case "upaljac":
            background.src = './lighter.jpg'
            break;
    };
};

const scale = () => {
    const slider = document.getElementById('velicinaSlike');
    const slika = document.getElementById('canvasFg');
    if(slika.width >= slika.height) {
        slika.width = slider.value;
    } else {
        slika.height = slider.value
    }
};

const rotate = () => {
    const slider = document.getElementById('rotacijaSlike');
    const slika = document.getElementById('canvasFg');
    slika.setAttribute('style', `transform:rotate(${slider.value}deg)`);
};

/*const startDrag = (e) => {
    if(!e) {
        var e = window.event;
    };

    var targ = e.target ? e.target : e.srcElement;

    if(targ.className != 'dragme') {return};
    offsetX = e.clientX;
    offsetY = e.clientY;

    if(!targ.style.left) {targ.style.left = '0px'};
    if(!targ.style.top) {targ.style.top = '0px'};

    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    document.onmousemove = dragDiv;
};

const dragDiv = (e) => {
    if(!drag) {return};
    if(!e) {var e = window.event};
    var targ = e.target ? e.target : e.srcElement;

    targ.style.left = coordX + e.clientX - offsetX + 'px';
    targ.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
};

const stopDrag = () => {
    drag = false;
};

window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
};*/