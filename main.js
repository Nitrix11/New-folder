const box = document.querySelector(".box");
const boxTwo = document.querySelector(".box2");
const boxThree = document.querySelector(".box3");
const card = document.querySelector(".card");
const cardTwo = document.querySelector(".cardo");
const cardThree = document.querySelector(".cardp");

box.onclick = function(){
  card.classList.toggle('cardActive');
}
boxTwo.onclick = function(){
  cardTwo.classList.toggle('cardActive');
}
boxThree.onclick = function(){
  cardThree.classList.toggle('cardActive');
}