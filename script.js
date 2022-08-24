
const add_button = document.getElementById('btn-add');
const textarea = document.getElementById('to-do');
const list = document.getElementById('list');


add_button.addEventListener('click', (event) => {
  // console.log(textarea.value);
  // console.log(list.innerHTML);
  // let array = [];
  // array += textarea.value;
  // array.forEach((item, index) => {
  //   console.log(item);
  //   console.log(index);
  // })

  list.innerHTML += `<li> ${textarea.value} </li> <button id="btn_delete"> Supprimer </button>`
  textarea.value = " ";

});
