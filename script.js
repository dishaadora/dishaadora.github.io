document.body.addEventListener('mousemove', e => {
    const body = document.body;
    const r = body.getBoundingClientRect(); // Get the dimensions of the body
    const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2; // Calculate ripple size
    body.style.setProperty('--s', '0'); // Reset scale
    body.style.setProperty('--o', '1'); // Reset opacity
    body.offsetTop; // Trigger reflow
    body.style.setProperty('--x', `${e.clientX}px`); // Set X coordinate
    body.style.setProperty('--y', `${e.clientY}px`); // Set Y coordinate
    body.style.setProperty('--d', `${d}px`); // Set ripple size
    body.style.setProperty('--s', '1'); // Animate scale
    body.style.setProperty('--o', '0'); // Fade out ripple
});
