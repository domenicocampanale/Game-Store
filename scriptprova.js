const image = document.querySelector(".immagine");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      image.classList.add("visibile");
    } else {
      image.classList.remove("visibile");
    }
  });
});

observer.observe(image);

