let vantaEffect = null;

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector("#home");

    if (!heroSection) {
        console.error("Hero section was not found.");
        return;
    }

    if (!window.VANTA || !window.VANTA.TOPOLOGY) {
        console.error("Vanta Topology was not loaded.");
        return;
    }

    vantaEffect = window.VANTA.TOPOLOGY({
        el: heroSection,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        scale: 1,
        scaleMobile: 1,

        color: 0x4a0502,
        backgroundColor: 0x000000
    });
});

window.addEventListener("beforeunload", () => {
    if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
    }
});