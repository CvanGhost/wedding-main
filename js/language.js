const names = ['Select language','Vyber jazyk','Elige idioma']


function greetPerson () {
  let name = names.shift()
  names.push(name)
  const select = document.querySelector('.header');
  select.textContent = name;
}

setInterval(greetPerson, 3000)
