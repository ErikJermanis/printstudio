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
    console.log(slider.value);
    if(slika.width >= slika.height) {
        slika.width = slider.value;
    } else {
        slika.height = slider.value
    }
};