import '../scss/styles.scss'
import 'bootstrap'

const themeToggle = document.querySelector('#theme-toggle')
const root = document.documentElement
const storedTheme = localStorage.getItem('theme')

const setTheme = (theme) => {
  const isDark = theme === 'dark'
  root.setAttribute('data-bs-theme', isDark ? 'dark' : 'light')

  if (themeToggle instanceof HTMLButtonElement) {
    themeToggle.querySelector('.theme-icon-sun')?.classList.toggle('d-none', isDark)
    themeToggle.querySelector('.theme-icon-moon')?.classList.toggle('d-none', !isDark)
  }
}

const initialTheme = storedTheme === 'light' || storedTheme === 'dark'
  ? storedTheme
  : 'light'

setTheme(initialTheme)

if (themeToggle instanceof HTMLButtonElement) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  })
}

const contactForm = document.querySelector('#contact-form')
const contactSuccess = document.querySelector('#contact-success')

/**
 * Creates the validation message once and keeps it in the form for subsequent
 * submissions.
 */
const getContactError = (form) => {
  let contactError = form.querySelector('#contact-error')

  if (!(contactError instanceof HTMLElement)) {
    contactError = document.createElement('div')
    contactError.id = 'contact-error'
    contactError.className = 'col-12 alert alert-danger d-none mb-0'
    contactError.setAttribute('role', 'alert')
    contactError.setAttribute('aria-live', 'assertive')
    contactError.tabIndex = -1
    contactError.textContent = 'Revisa los campos marcados antes de enviar la consulta.'
    form.append(contactError)
  }

  return contactError
}

const showContactMessage = (message, isVisible) => {
  message.classList.toggle('d-none', !isVisible)
}

if (contactForm instanceof HTMLFormElement) {
  const contactError = getContactError(contactForm)

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    contactForm.classList.add('was-validated')

    if (!contactForm.checkValidity()) {
      event.stopPropagation()
      showContactMessage(contactError, true)
      contactForm.querySelector(':invalid')?.focus()
      return
    }

    showContactMessage(contactError, false)
    contactForm.reset()

    if (contactSuccess instanceof HTMLElement) {
      showContactMessage(contactSuccess, true)
      contactSuccess.focus()
    }
  })
}