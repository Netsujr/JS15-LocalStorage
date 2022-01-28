const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


addItems.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
    <li>
      <input type="checkbox" data-index=${index} id=item${index} />
      <label for="item${index}">${plate.text}</label>
    </li>
    `;
    // any instance of checked will
    // make checked true, even if I type
    // checked="false"
  }).join('');
}
