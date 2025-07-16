const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
const itemCount = document.getElementById('itemCount');

let totalItems = 0;

function updateItemCount(change) {
  totalItems += change;
  itemCount.textContent = totalItems;
}

addItemBtn.addEventListener('click', function () {
  const itemText = itemInput.value.trim();

  if (itemText === '') {
    return;
  }

  const listItem = document.createElement('li');

  const itemSpan = document.createElement('span');
  itemSpan.textContent = itemText;

  itemSpan.addEventListener('click', function () {
    const completedSpan = document.createElement('span');
    completedSpan.textContent = 'Completed!';
    listItem.replaceChild(completedSpan, itemSpan);
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', function () {
    listItem.remove();
    updateItemCount(-1);
  });

  listItem.appendChild(itemSpan);
  listItem.appendChild(removeBtn);
  itemList.appendChild(listItem);
  itemInput.value = '';
  updateItemCount(1);
});