const images = ['1.jpg', '2.jpg', '3.jpg'];
const targetImage = document.querySelector('.profile-photo img');
let i = 1;

targetImage.addEventListener('click', () => {
  targetImage.style.opacity = '0';

  setTimeout(() => {
    targetImage.src = 'images/' + images[i];
    targetImage.style.opacity = '1';

    i++;
    if (i >= images.length) {
      i = 0;
    }
  }, 200);
});