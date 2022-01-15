const names = ['Select language','Vyber jazyk','Elige idioma']

function greetPerson () {
  let name = names.shift()
  names.push(name)
  const h1 = document.querySelector('h1')
  const oldSpan = document.querySelector('span')
  
  if (oldSpan) {
    h1.removeChild(oldSpan)
  }
  
  const span = document.createElement('span')
  span.classList.add('fade')
  span.textContent = name
  h1.appendChild(span)
}

setInterval(greetPerson, 4000)