/**
 * section 3 component
 * import with "import { S3FX } from './S3FX';"
**/

import Gradientify from 'gradientify';

let gradientify = new Gradientify(
    '[data-trigger="hero-bg"]',
    [
        "radial-gradient(111.80% 116.18% at 73.68% 92.39%, #7B2B2B 0%, #59389E 100%)",
        "radial-gradient(108.14% 85.33% at 14.04% 93.11%, #4E0731 23.41%, #38809E 100%)",
        "radial-gradient(184.80% 142.99% at 14.50% 55.77%, rgba(27, 128, 159, 0.54) 0%, #15074E 45.69%, #FFC32A 100%)",
        "radial-gradient(150.73% 125.26% at 11.26% 88.41%, #2A5B77 0%, #4E0746 100%)",
        "radial-gradient(150.73% 125.26% at 11.26% 88.41%, #772A2A 0%, #D416C1 100%)",
    ],
    3000 // Fading interval in miliseconds
)



