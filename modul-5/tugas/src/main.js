import './style.css'

// toggle dark mode sederhana (opsional)
const btn = document.querySelector('#toggleDark')
if (btn) {
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
  })
}