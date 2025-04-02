//VIDEOS DE PAISES
document.addEventListener("DOMContentLoaded", function() {

    const videoContainers = document.querySelectorAll('.video-container, .video-container2');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');  


        container.addEventListener('mouseenter', function() {
            if (video) {
                video.play();
            }
        });

        container.addEventListener('mouseleave', function() {
            if (video) {
                video.pause();
                video.currentTime = 0; 
            }
        });
    });
});

//BARRA MENU DESPLEGABLE

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-menu > li");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.classList.add("active");
        });

        item.addEventListener("mouseleave", function (event) {
            // Si el mouse sigue dentro del li o su submenú, no quitar la clase
            if (!this.contains(event.relatedTarget)) {
                this.classList.remove("active");
            }
        });
    });
});

