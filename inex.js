const popupOpened = document.querySelector('.footer__bottom')
const closeButton = document.querySelector('.popup__close-icon');
const popup = document.querySelector('#popup');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupOpened.addEventListener('click', () => {
  openPopup(popup);
})

closeButton.addEventListener('click', ()=> {
  console.log('uuu')
  closePopup(popup);
})



document.querySelectorAll('.a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e){
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

        const topOffset = 0;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
  });
});
