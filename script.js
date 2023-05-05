const form = document.querySelector('.signup-form')
const emailInput = document.querySelector('.email-input')
const errMsg = document.querySelector('.error-msg')

form.addEventListener('submit', (e) => {
  console.log(e)
  e.preventDefault()

  const email = emailInput.value
  console.log(email)

  if (!validateEmail(email)) {
    errMsg.classList.add('active')

    setTimeout(() => {
      errMsg.classList.remove('active')
    }, 6000)
    return
  }

  form.submit()
})
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
