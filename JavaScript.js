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
        let timeout;

        item.addEventListener("mouseenter", function () {
            clearTimeout(timeout); // Evita que el menú se oculte si el usuario vuelve rápido
            this.classList.add("active");
        });

        item.addEventListener("mouseleave", function (event) {
            timeout = setTimeout(() => {
                if (!this.contains(document.activeElement)) {
                    this.classList.remove("active");
                }
            }, 100); // Ajusta el tiempo de espera según necesites
        });
    });
});


