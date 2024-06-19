// /* script.js */

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById('celebrateButton').addEventListener('click', function() {
//         // Create a confetti effect
//         confetti({
//             particleCount: 100,
//             spread: 70,
//             origin: { y: 0.6 }
//         });
//     });
// });

// // Confetti.js snippet
// function confetti(options) {
//     var duration = options.duration || 2 * 1000;
//     var animationEnd = Date.now() + duration;
//     var defaults = {
//         startVelocity: 30,
//         spread: 360,
//         ticks: 60,
//         zIndex: 0
//     };

//     function randomInRange(min, max) {
//         return Math.random() * (max - min) + min;
//     }

//     var interval = setInterval(function() {
//         var timeLeft = animationEnd - Date.now();

//         if (timeLeft <= 0) {
//             return clearInterval(interval);
//         }

//         var particleCount = options.particleCount * (timeLeft / duration);
//         confetti(Object.assign({}, defaults, { particleCount, origin: { y: randomInRange(0.1, 0.3) } }));
//     }, 250);
// }
/* script.js */

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('celebrateButton').addEventListener('click', function() {
        // Create a confetti explosion with various colors and shapes
        confetti({
            particleCount: 200,
            spread: 360,
            origin: { y: 0.6 },
            shapes: ['heart', 'star', 'circle'],
            colors: [ '#ff7e5f', '#feb47b', '#e84395', '#f08080' ]
        });
    });
});

