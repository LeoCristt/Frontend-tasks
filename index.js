// Открытие модального окна
document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})


// Открытие модального окна-2
document.getElementById("open-modal-btn-2").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})

// Открытие модального окна-3
document.getElementById("open-modal-btn-3").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})


// Закрытие модального окна по крестику
document.getElementById("close-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})

// Закрытие модального окна при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if ((e.key) === "Escape"){
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрытие модального окна при клике вне его
document.querySelector("#my-modal .modal-window").addEventListener('click' , event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click' , event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Обработка данных в модальном окне
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const countrySelect = document.querySelector('#country');
const dateInput = document.querySelector('#date');
const commentTextarea = document.querySelector('#comment');
const agreementCheckbox = document.querySelector('#agreement');
const submitButton = document.querySelector('.button');
const closeModalBtn = document.querySelector('#close-modal-btn');
const modalWindow = document.querySelector('.modal-window');

form.addEventListener('input', () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const country = countrySelect.value;
  const date = dateInput.value;
  const comment = commentTextarea.value.trim();
  const agreement = agreementCheckbox.checked;

  if (name && email && phone && country && date && comment && agreement) {
    submitButton.removeAttribute('disabled');
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Форма успешно отправлена!');
      closeModalBtn.click(); // Закрытие модального окна после отправки формы
    });
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});