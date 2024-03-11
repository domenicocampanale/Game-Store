function toggleImages() {
    var images = document.querySelectorAll('.image');
    images.forEach(function(img) {
        img.classList.toggle('show');
    });
    }