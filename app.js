const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
    <li>
      <input type="checkbox" data-index=${index} id=item${index} ${plate.done ? 'checked' : ""}/>
      <label for="item${index}">${plate.text}</label>
    </li>
    `;
    // any instance of checked will
    // make checked true, even if I type
    // checked="false"
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}


populateList(items, itemsList);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

//"plates" class is the parent, responsible for passing on the event
