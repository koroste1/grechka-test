import Swiper from "swiper";

export function isWebp() {
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
            let className = support === true ? 'webp' : 'no-webp';
            document.documentElement.classList.add(className);
        }
    );
}

export function openPopup() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.popup__close');
    close.addEventListener('click', () => closePopup(popup));
    popup.classList.add('open');
    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup__content')) {
            closePopup(popup);
        }
    })
}

function closePopup(popup) {
    popup.classList.remove('open');
}

export async function getSlides() {
    let result = [];
    await fetch('https://private-a872b-grchhtml.apiary-mock.com/slides?offset=0&limit=3')
        .then(res => res.json())
        .then(data => data.data.map(item => result.push(item)));
    if (result.length > 2) {
        const activeSlide = document.querySelector('.swiper-slide-active');
    }
    // console.log(result.length);
    await createSlides(result);
    await swiper();
    // return result;
}

export function createSlides(slides) {
    console.log(slides[0]);
    const swiper = document.querySelector('.swiper-wrapper');
    if (slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            console.log(slides[i]);
            swiper.insertAdjacentHTML('beforeend', `
             <div class="swiper-slide" id="${slides[i].id}">
                <div class="swiper__background"></div>
                <header class="header">
                    <h1 class="header__title">${slides[i].title}</h1>
                    <div class="header__logo">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.9" clip-path="url(#clip0_7_18)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M30 1.84376C14.4498 1.84376 1.84382 14.4497 1.84382 29.9999C1.84382 45.5502 14.4498 58.1561 30 58.1561C45.5502 58.1561 58.1562 45.5502 58.1562 29.9999C58.1562 14.4497 45.5502 1.84376 30 1.84376ZM0 29.9999C0 13.4314 13.4315 -6.10352e-05 30 -6.10352e-05C46.5685 -6.10352e-05 60 13.4314 60 29.9999C60 46.5685 46.5685 59.9999 30 59.9999C13.4315 59.9999 0 46.5685 0 29.9999Z"
                                  fill="#6F6E6F"/>
                            <path d="M12.2207 30.0022C12.2207 20.1823 20.1809 12.2223 30.0011 12.2219C39.8207 12.2223 47.7805 20.182 47.7809 30.0022C47.7805 39.8218 39.8207 47.7816 30.0011 47.7822C20.1809 47.7816 12.2207 39.8218 12.2207 30.0022ZM18.1379 18.1395C15.1012 21.1771 13.2248 25.3679 13.2244 30.0022C13.2248 34.6364 15.1012 38.8274 18.1379 41.8648C21.1755 44.9011 25.3663 46.7779 30.0011 46.7783C34.6348 46.7779 38.8256 44.9011 41.8632 41.8648C44.8998 38.8274 46.7764 34.6364 46.7768 30.0022C46.7764 25.3679 44.8998 21.1771 41.8632 18.1395C38.8256 15.1027 34.6348 13.2263 30.0011 13.2259C25.3663 13.2263 21.1755 15.1027 18.1379 18.1395Z"
                                  fill="#6F6E6F"/>
                            <path d="M12.228 30.0012H30.0096V12.2219H30.0084C20.1886 12.2223 12.2286 20.1816 12.228 30.0012Z"
                                  fill="#6F6E6F"/>
                            <path d="M47.7771 29.9922H29.9955V47.7832H29.9967C39.8163 47.7828 47.7765 39.8118 47.7771 29.9922Z"
                                  fill="#6F6E6F"/>
                            <path d="M50.6033 13.5597L46.6409 16.181L48.5159 12.5341C48.0285 11.9582 47.2905 11.3528 47.2905 11.3528L43.6734 13.169L46.3276 9.27708C45.887 8.90709 45.3771 8.59938 44.888 8.22836L41.1729 14.0231C41.1729 14.0231 41.8765 14.4369 42.7373 15.2318L46.5821 13.2429L44.5682 17.0271C45.0212 17.5054 45.4244 18.085 45.844 18.6023L51.6958 14.9829C51.6956 14.9829 51.3375 14.4199 50.6033 13.5597ZM30.4124 9.60856L32.1954 5.66872L32.3566 10.6634C33.0747 10.6954 34.134 10.9656 34.134 10.9656L33.814 3.89128C32.4695 3.69583 31.3966 3.64236 31.3966 3.64236L29.6788 7.91573L28.0013 3.67678C28.0013 3.67678 26.8934 3.78475 25.5486 3.97999L25.2267 11.1088C25.2267 11.1088 26.2882 10.8017 27.0062 10.77L27.1578 5.69884L28.9453 9.60836H30.4124V9.60856ZM15.3224 11.9248L15.3226 11.9176C15.409 11.6 15.406 11.2646 15.3137 10.9487C15.2213 10.6327 15.0434 10.3484 14.7995 10.1273C14.0761 9.46741 12.9985 9.44508 11.8486 10.5928C11.8486 10.5928 9.72902 12.7181 8.29309 14.7995L13.4499 19.5023L17.3362 15.1454C18.1817 14.2114 18.2147 12.8885 17.4413 12.1827C16.863 11.6562 16.0246 11.5814 15.3224 11.9248ZM10.3481 14.4525C12.1749 12.1895 12.9063 11.571 12.9063 11.571C13.3853 11.1566 13.7395 11.1203 14.027 11.3823C14.3146 11.6441 14.2783 12.1534 13.9465 12.5193L11.3645 15.3789L10.3481 14.4525ZM16.1533 14.2624L13.4417 17.2729L12.4224 16.3436L15.1343 13.3333C15.4658 12.9672 15.9632 12.8779 16.2447 13.1346C16.5262 13.3913 16.485 13.8965 16.1533 14.2624Z"
                                  fill="#6F6E6F"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7_18">
                                <rect width="60" height="60" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </header>
                <div class="like">
    <div class="like__img">
        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18.2426H7.21056V35.548H0V18.2426ZM35.4541 13.556H25.2367L25.3594 9.5182L26.4408 4.3266L24.8761 0H21.3936L20.6723 6.36706L17.067 11.8977L15.7477 18.9855H12.0197V35.548L20.795 36.0529H31.0702L34.8555 33.349L38.1001 19.721L35.4541 13.556Z"
                  fill="#727272"/>
        </svg>
    </div>
    <div class="like__text">like: <span class="like__counter">0</span></div>
</div>
            </div>
            `)
            const slide = document.getElementById(`${slides[i].id}`);
            slide.style.background = `url(${slides[i].imgUrl})`;
        }
    }
    addPopupLink();
}

function addPopupLink() {
    const like = document.querySelectorAll('.like__img');
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener('click', openPopup);
    }
}

const swiper = () => {
    const swiper = document.querySelector('.swiper');
    swiper.insertAdjacentHTML('beforeend', `
            <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
`);
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}