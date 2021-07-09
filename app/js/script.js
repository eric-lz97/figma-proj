const btnNavMob = document.querySelector('#btnNavMob');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const headerMenu = document.querySelector('#head');
const c = document.querySelector("#head").childNodes.length

const lis = [...document.querySelectorAll('#head > a')];


btnNavMob.addEventListener('click', function () {
  console.log('yoooo');

  if (header.classList.contains('open')) { // Close Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });

  }
  else { // Open Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }
});


lis.forEach((li) => {
  let classA = 'arrow topRight'
  let classB = 'arrow topDown'

  li.addEventListener('click', () => {
    const index = lis.indexOf(li);
    if (lis[index].childNodes[1].className === classA) {
      lis.map((itemz, index) =>{
        lis[index].childNodes[1].className = classA
      })
      lis[index].childNodes[1].className = classB
    } else {
      li.childNodes[1].className = classA
    }
  });
});