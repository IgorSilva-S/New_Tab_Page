document.querySelectorAll(".settingsBarButton").forEach((b) => {
    b.onmouseleave = (e) => {
        e.target.style.background = "none";
        e.target.style.borderImage = null;
    };

    b.addEventListener("mousemove", (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , #0632ff44, #0632ff00 )`;
        e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,#0632ffaa,#0632ff11 ) 1 / 1px / 0px stretch `;
    });
});