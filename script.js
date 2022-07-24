// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);

const foodOptions = ['Pizza', 'Hamburger', 'Hot Dog', 'Pasta', 'Salad','Fried Chicken'];
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  let randomFood = Math.trunc(Math.random() * foodOptions.length)
  document.getElementById('food').textContent = foodOptions[randomFood];
})