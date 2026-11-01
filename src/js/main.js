import '../scss/styles.scss'
import 'bootstrap'

const contactForm = document.querySelector('#contact-form')
const contactSuccess = document.querySelector('#contact-success')

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    contactForm.classList.add('was-validated')

    if (!contactForm.checkValidity()) {
      contactForm.querySelector(':invalid')?.focus()
      return
    }

    contactForm.reset()
    contactForm.classList.remove('was-validated')

    if (contactSuccess instanceof HTMLElement) {
      contactSuccess.classList.remove('d-none')
      contactSuccess.focus()
    }
  })
}