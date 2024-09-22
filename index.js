// Открытие модального окна
const modalButtons = document.querySelectorAll('#open-modal-btn');
modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    let title = button.getAttribute('data-title')
    document.getElementById("modal-title").textContent = title;
    document.getElementById("my-modal").classList.add("open");
  });
});

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
    console.log('Enabling submit button');
    submitButton.removeAttribute('disabled');
  } else {
    console.log('Disabling submit button');
    submitButton.setAttribute('disabled', 'disabled');
  }
});

submitButton.addEventListener('click', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  console.log('Submit button clicked!');
  alert('Форма успешно отправлена!');

  
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  countrySelect.value = '';
  dateInput.value = '';
  commentTextarea.value = '';
  agreementCheckbox.checked = false;

  submitButton.removeAttribute('disabled');
  closeModalBtn.click(); // Закрытие модального окна

  // Remove the event listener to prevent multiple submissions
  submitButton.removeEventListener('click', submitHandler);
}