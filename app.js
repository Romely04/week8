document.addEventListener("DOMContentLoaded", () => {
    const images = ['1.jpg', '2.jpg', '3.jpg'];
    const targetImage = document.querySelector('.profile-photo img');
    let currentIndex = 0;
  
    targetImage.addEventListener('click', () => {
      targetImage.style.opacity = '0';
  
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        targetImage.src = 'images/' + images[currentIndex];
        targetImage.style.opacity = '1';
      }, 200);
    });
  });