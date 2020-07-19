// this function takes text and wraps all the letters in spans
const makeSpans = selector => {
  const [...elements] = document.querySelectorAll(selector)
  return elements.map(element => {
    const text = element.innerText.split('')
    const spans = text
      .map(letter => '<span>' + letter + '</span>')
      .join('')
    return element.innerHTML = spans
  })
}

// usage with single selector
makeSpans('h1')

// or with multiple selectors
makeSpans('h1, a')

// Toggle Dark Mode
const bodyTag = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener("click", function () {
  bodyTag.classList.toggle('light-mode')
  if (button.innerHTML === 'Light Mode') {
    button.innerHTML = "Dark Mode"
  } else {
    button.innerHTML = "Light Mode"
  }
})

// MODALS
const poemLink = document.querySelector(".about-poem")
const poemModal = document.querySelector(".poem-modal")
const aboutLink = document.querySelector('.about-site')
const aboutModal = document.querySelector('.about-modal')

const close = document.querySelector(".close")
const closeAbout = document.querySelector(".close-about")

poemLink.addEventListener("click", function () {
  poemModal.classList.remove('d-none')
})

aboutLink.addEventListener('click', function () {
  aboutModal.classList.remove('d-none')
})

close.addEventListener("click", function () {
  poemModal.classList.add('d-none')
})

closeAbout.addEventListener("click", function () {
  aboutModal.classList.add('d-none')
})

// Add z index for each modal
const modals = document.querySelectorAll('.modal')
let z = 100

modals.forEach(modal => {
  modal.addEventListener("click", function () {
    modal.style.zIndex = z
    z = z + 1
  })
})

