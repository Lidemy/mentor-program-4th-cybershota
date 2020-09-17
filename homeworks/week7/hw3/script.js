const dateGridWrapper = document.querySelector('.date-grid-wrapper');
const modal = document.querySelector('.modal');
const finBtn = document.querySelector('.modal button:first-of-type');
const delBtn = document.querySelector('.modal button:last-of-type');
const input = document.querySelector('.modal input');

// 點選的日期區塊
let clickBlock = 0;
let inputText = '';
let todoTarget;

// 生成每日區塊後塞進 date-grid-wrapper
function dateBlockToWrapper(element) {
  dateGridWrapper.appendChild(element);
}

// 製作每日區塊
function createDateBlock() {
  for (let i = 0; i < 35; i += 1) {
    const dateBlock = document.createElement('div');
    dateBlock.classList = 'date-block';
    dateBlock.setAttribute('data-array', `${i}`);
    dateBlockToWrapper(dateBlock);
  }
}

// 製作 Todo Container Element
function createTodoContainer(element) {
  const dateSym = element.firstElementChild;
  const todoCon = document.createElement('div');
  todoCon.classList = 'todo-container';
  dateSym.after(todoCon);
}

// 製作日期標記（日期直接印沒有用 Date 物件）
function createDateSymbol() {
  const dateBlocks = document.querySelectorAll('.date-block');
  dateBlocks.forEach((dateBlock, index) => {
    // 日期文字節點
    const dateSym = document.createElement('div');
    dateSym.classList = 'date-symbol';
    let date = '';
    if (index > 1 && index < 32) {
      date = `${index - 1}`;
      dateSym.textContent = date;
      dateBlock.append(dateSym);
      // 同時塞進 Todo List 用的 Container
      createTodoContainer(dateBlock);
    }
    dateSym.textContent = date;
    dateBlock.appendChild(dateSym);
  });
}

createDateBlock();
createDateSymbol();

// 製作 Todo Element
function createTodo(text) {
  const timeStamp = Date.now();
  const todoItem = document.createElement('div');
  const todoText = document.createElement('p');
  const todoCheck = document.createElement('input');
  const todoCheckLabel = document.createElement('label');
  todoItem.classList = 'todo-item';
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.setAttribute('id', `${timeStamp}`);
  todoCheckLabel.setAttribute('for', `${timeStamp}`);
  todoItem.appendChild(todoCheck);
  todoItem.appendChild(todoCheckLabel);
  todoItem.appendChild(todoText);
  todoItem.childNodes[2].textContent = text;
  return todoItem;
}

// 監聽 input 輸入框
input.addEventListener('change', () => {
  inputText = input.value;
});

// 改變 Check 狀態
function changeCheck() {
  todoTarget.parentNode.lastElementChild.classList.toggle('line-through');
  todoTarget.parentNode.classList.toggle('check');
}

// Modal

// 透過 Modal 新增/編輯 Todo
function todoBtn() {
  const dateBlock = document.querySelector(`[data-array="${clickBlock}"]`);
  // Add 按鈕
  if (finBtn.textContent === 'Add') {
    dateBlock.childNodes[0].appendChild(createTodo(inputText));
    modal.style.display = 'none';
    // Submit 按鈕
  } else {
    todoTarget.textContent = input.value;
    modal.style.display = 'none';
  }
}

// 刪除 Todo
function deleBtn() {
  todoTarget.parentNode.remove();
  modal.style.display = 'none';
}

// 顯示 Modal
// 兩種模式：新建 / 編輯
function showModal(newTodo, eventText) {
  if (newTodo === true) {
    input.value = '';
    // 按鈕轉為 Add
    modal.childNodes[1].childNodes[3].textContent = 'Add';
    modal.style.display = 'flex';
  } else {
    // 按鈕轉為 Submit
    input.value = eventText.textContent;
    modal.childNodes[1].childNodes[3].textContent = 'Submit';
    modal.style.display = 'flex';
  }
}

// 辨別 Click 事件是新增 todo 還是 編輯 todo
function dateClickEvent(e) {
  if (e.target.matches('.todo-container')) {
    showModal(true);
  } else if (e.target.matches('p')) {
    todoTarget = e.target;
    showModal(false, e.target);
  } else if (e.target.matches('input')) {
    todoTarget = e.target;
    changeCheck();
  }
}

// Add 或 Submit 按鈕監聽
finBtn.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    todoBtn();
  },
  false,
);

// 刪除按鈕監聽

delBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleBtn();
});

// 點擊灰色區域關閉 Modal
function closeModal(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

modal.addEventListener('click', closeModal);

// 每日區塊監聽
const dateBlocks = document.querySelectorAll('.date-block');
dateBlocks.forEach((dateBlock) => {
  dateBlock.addEventListener('click', (e) => {
    // 儲存 Click 區塊 id
    clickBlock = dateBlock.dataset.array;
    dateClickEvent(e);
  });
});
