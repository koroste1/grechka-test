import * as modules_functions from "./modules/functions.js";
import Swiper, {Navigation} from 'swiper';

modules_functions.isWebp();
const slides = modules_functions.getSlides();

Swiper.use([Navigation]);
//
// const swipe = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// const swiper = async () => {
//     await new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: false,
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// }
// swiper().then();

// modules_functions.createSlides(slides);