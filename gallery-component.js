document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const images = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg',
        // Agrega más imágenes según sea necesario
    ];

    let currentIndex = 0;

    function showImage(index) {
        mainImage.src = images[index];
    }

    function highlightThumbnail(index) {
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === index);
        });
    }

    function updateGallery() {
        showImage(currentIndex);
        highlightThumbnail(currentIndex);
    }

    function handleThumbnailClick(index) {
        currentIndex = index;
        updateGallery();
    }

    function handlePrevButtonClick() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    function handleNextButtonClick() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    // Cargar miniaturas
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => handleThumbnailClick(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    // Asignar manejadores de eventos a los botones
    prevBtn.addEventListener('click', handlePrevButtonClick);
    nextBtn.addEventListener('click', handleNextButtonClick);

    // Inicializar la galería
    updateGallery();
});
