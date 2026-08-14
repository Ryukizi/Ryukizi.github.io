import { runPixarIntro } from './modules/intro.js';
import { initTheme } from './modules/theme.js';
import { initAccordion } from './modules/accordion.js';
import { initNavigation } from './modules/navigation.js';
import { initSpiral } from './modules/spiral.js';
import { initCarousel } from './modules/carousel.js';
import { initScrambleEffects } from './modules/scramble.js';
import { initTypewriterContact } from './modules/Typewriter.js';

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    runPixarIntro();
    initTheme();
    initNavigation();
    initAccordion();
    initSpiral();
    initCarousel();
    initScrambleEffects();
    initTypewriterContact();
});



