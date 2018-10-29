const elements = {
  enterbtn: document.getElementById("enter"),
  input: document.querySelector(".userinput"),
  ul: document.querySelector("ul"),
  newItem: document.querySelector('.new__item'),
  addBtn: document.querySelector('.add__btn'),
  delBtn: document.querySelector('.del__btn')
}

const deleItem = e => {
  const list = document.querySelector(".myList");
  list.removeChild(list.childNodes[0]); 
};

const addItem = () => {
  let query = elements.input.value;
  
  const markup = `
  <li class="shopping__item d-flex align-items-start>
    <div class="shopping__item mr-auto">
      <p class='p-3'>${query}</p>
    </div>
    <div onclick="deleItem()" class='del__btn data-item p-3'>
    <button type="button" class="btn btn-primary btn-sm">Delete</button>
    </div>
  </li>
  `;
  elements.newItem.insertAdjacentHTML('beforeend', markup);
}

elements.addBtn.addEventListener('click', () => {
  addItem();
  elements.input.value = '';
});

