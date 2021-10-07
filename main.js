console.log('hello')

const returnSomething = () => {
  console.log('something');
}

const testAsync = async () => {
  console.log('heyo');
  console.log('there is a certain order to things');
  await returnSomething();
  console.log('this appears after something i think')
}

const $drawerMenu = document.querySelector('.drawer-button')
const $drawer = document.querySelector('.drawer');
const slideOut = () => {
  $drawer.classList.toggle('drawer-active')
}
$drawerMenu.addEventListener('click', slideOut)
