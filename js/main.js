const loginButton = document.querySelector(".login-link");
const popupLogin = document.querySelector(".modal-login");
const modalOverlay = document.querySelector(".modal-overlay")
const modalClose = document.querySelectorAll('.modal-close');
const findUs = document.getElementById("find-us")
const map = document.querySelector(".modal-map");

function openPopup (popup) {
    popup.classList.remove('vissually-hidden');
    modalOverlay.classList.remove('vissually-hidden');
    if (popup === popupLogin){
        modalClose[0].addEventListener('click', () => {
            closePopup(popup);
        });
    }else {
        modalClose[1].addEventListener('click', () => {
            closePopup(popup);
        });
    }
};

function closePopup (popup) {
    popup.classList.add('vissually-hidden');
    modalOverlay.classList.add('vissually-hidden');
   
}

loginButton.addEventListener('click', () => {
    openPopup(popupLogin);
});
findUs.addEventListener('click', ()=> {
    openPopup(map);
});
