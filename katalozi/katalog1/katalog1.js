var images = new Array();
var preload = new Array()

for(i = 0; i < 48; i++) {
    preload[i] = `./${i + 1}.jpg`;
} 

for(i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
};

let stranica = 0;

const gumbic = document.querySelector('.page2');
const negumb = document.querySelector('.page1');
const napred = document.querySelector('.btnFwd');
const nazad = document.querySelector('.btnBwd');
const page = document.querySelector('.page');
const pageFront = document.querySelector('.pageFront');
const pageBack = document.querySelector('.pageBack');
const pageB = document.querySelector('.pageB');
const pageFrontB = document.querySelector('.pageFrontB');
const pageBackB = document.querySelector('.pageBackB');
const catalogue = document.querySelector('.magazine');

gumbic.style.background = `url(${preload[0]})`;
gumbic.style.backgroundSize = 'cover';

napred.addEventListener('mousedown', () => {
    if(stranica < preload.length) {
        stranica += 2;

        // Postavlja slike na .page
        pageFront.style.background = `url(${preload[stranica - 2]})`;
        pageFront.style.backgroundSize = 'cover';
        pageBack.style.background = `url(${preload[stranica - 1]})`;
        pageBack.style.backgroundSize = 'cover';
        pageFront.classList.add('pageFrontshadow');
        pageBack.classList.add('pageBackshadow');

        // Flipa stranicu
        page.style.transitionDuration = '.25s';
        page.classList.add('fliped');

        page.addEventListener('transitionend', () => {

            // Postavlja transparent na .page
            pageFront.style.background = 'transparent';
            pageBack.style.background = 'transparent';
            pageFront.classList.remove('pageFrontshadow');
            pageBack.classList.remove('pageBackshadow');

            // Postavlja sliku na negumb
            negumb.style.background = `url(${preload[stranica - 1]})`;
            negumb.style.backgroundSize = 'cover';

            // Vraca .page na desnu stranu
            page.style.transitionDuration = '0s';
            page.classList.remove('fliped');
        });

        // Postavlja sliku na gumb
        stranica < preload.length - 1 ? gumbic.style.background = `url(${preload[stranica]})` : gumbic.style.background = '';
        gumbic.style.backgroundSize = 'cover';
    }
    
});

nazad.addEventListener('mousedown', () => {
    if(stranica > 0) {
        stranica -= 2;

        // Postavlja slike na .pageB
        pageFrontB.style.background = `url(${preload[stranica + 1]})`;
        pageFrontB.style.backgroundSize = 'cover';
        pageBackB.style.background = `url(${preload[stranica]})`;
        pageBackB.style.backgroundSize = 'cover';
        pageFrontB.classList.add('pageFrontBshadow');
        pageBackB.classList.add('pageBackBshadow');


        // Flipa stranicu
        pageB.style.transitionDuration = '.25s';
        pageB.classList.add('flipedB');

        pageB.addEventListener('transitionend', () => {

            // Postavlja transparent na .page
            pageFrontB.style.background = 'transparent';
            pageBackB.style.background = 'transparent';
            pageFrontB.classList.remove('pageFrontBshadow');
            pageBackB.classList.remove('pageBackBshadow');

            // Postavlja sliku na gumb
            gumbic.style.background = `url(${preload[stranica]})`;
            gumbic.style.backgroundSize = 'cover';

            // Vraca .pageB na desnu stranu
            pageB.style.transitionDuration = '0s';
            pageB.classList.remove('flipedB');
        });

        // Postavlja sliku na negumb
            stranica > 0 ? negumb.style.background = `url(${preload[stranica - 1]})` : negumb.style.background = 'transparent';
            negumb.style.backgroundSize = 'cover';
    };
});

let zoom = 1;

const toggleZoom = () => {
    if (zoom) {

        document.querySelector('.poruka').style.visibility = 'visible';

        // Click and drag engine
        const mag = document.querySelector('.wrapper');
        mag.style.overflow = 'scroll';
        

        let startY;
        let startX;
        let scrollLeft;
        let scrollTop;
        let isDown;

        mag.addEventListener('mousedown', (e) => {
            document.querySelector('.poruka').style.visibility = 'hidden';
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
        catalogue.style.width = '268.8vh';
        catalogue.style.height = '192vh';
        napred.style.visibility = 'hidden';
        nazad.style.visibility = 'hidden';

        document.querySelector('.btnZoom').innerHTML = "Odzumiraj";

        zoom = 0;
    } else {
        const mag = document.querySelector('.wrapper');
        mag.style.overflow = 'hidden';
        napred.style.visibility = 'visible';
        nazad.style.visibility = 'visible';

        if(window.innerWidth / window.innerHeight > 1.6) {
            catalogue.style.width = '134.4vh';
            catalogue.style.height = '96vh';
        } else {
            catalogue.style.width = '84vw';
            catalogue.style.height = '60vw';
        };

        document.querySelector('.btnZoom').innerHTML = "Zumiraj";

        zoom = 1;
    }
};