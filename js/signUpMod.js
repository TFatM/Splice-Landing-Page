const singUpModal = document.querySelector('.backdrop');
const singUpOpenBtn = document.querySelector("#signUpOpen");
const singUpCloseBtn = document.querySelector("#signUpClose");

const toogleModal = () => singUpModal.classList.toggle('hidden');

window.onclick = function (e) {
  if (e.target == singUpModal) {
    singUpModal.classList.toggle('hidden')
  }
};

singUpOpenBtn.addEventListener('click', toogleModal);
singUpCloseBtn.addEventListener('click', toogleModal);