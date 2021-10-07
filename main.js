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
  $drawer.classList.toggle('drawer-active',true)
}
$drawerMenu.addEventListener('click', slideOut)

const clickAway = (event) => {
  if (!event.target.closest('.drawer') && !event.target.classList.contains('drawer-button')) {
    $drawer.classList.toggle('drawer-active', false);
  }
}
document.addEventListener('click', clickAway)
