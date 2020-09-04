const form = document.querySelector('form');
const modalResult = document.querySelectorAll('.modal-body ul li');
const phoneInput = document.querySelector('#cell-phone');
const modal = document.querySelector('.modal');

let elArry = [];
let validArry = [];
let data = [];

console.log(modalResult);

function addWarning(element) {
  elArry.push(element);
  form.childNodes[element].classList.add('block-invalid', 'warning');
  form.childNodes[elArry[0]].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeWarning(element) {
  form.childNodes[element].classList.remove('block-invalid', 'warning');
}

function insertModalResult(content) {
  data.push(content);
  if (data.length === 6) {
    for (let i = 0; i <= 5; i += 1) {
      modalResult[i].childNodes[1].textContent = (data[i]);
    }
  }
}

/* ---------------------------------- */
/*              表單驗證                */
/* ---------------------------------- */

// HTML form 使用 novalidate 關閉內建驗證
function formValuate() {
  // 驗證暱稱
  if (form.name.value.match(/^[^\s].{0,18}[^\s]$/g)) {
    removeWarning(3);
    validArry.push(true);
    insertModalResult(form.name.value);
  } else {
    validArry.push(false);
    addWarning(3);
  }
  // 驗證電子郵件
  if (
    form.email.value.match(
      /^(?:(([a-z0-9](([-!#$*+\w])(?:\.)?(?!\.))+))(?<!\.)@)(?:([0-9a-z][-0-9a-z]*[0-9a-z]*\.)+[a-z0-9]{0,22}[a-z0-9]$)/g,
    )
  ) {
    removeWarning(5);
    validArry.push(true);
    insertModalResult(form.email.value);
  } else {
    validArry.push(false);
    addWarning(5);
  }
  // 驗證手機號碼
  if (form.phone.value.match(/\+(886) ([\d]{3})-([\d]{3})-([\d]{3})/g)) {
    removeWarning(7);
    validArry.push(true);
    insertModalResult(form.phone.value);
  } else {
    validArry.push(false);
    addWarning(7);
  }
  // 驗證報名類型
  if (form.category.value) {
    removeWarning(9);
    validArry.push(true);
    insertModalResult(form.category.value);
  } else {
    validArry.push(false);
    addWarning(9);
  }
  // 驗證怎麼知道活動
  if (form.howknow.value.match(/(.{1,100})/g)) {
    removeWarning(11);
    validArry.push(true);
    const output = form.howknow.value.trim();
    insertModalResult(output);
  } else {
    validArry.push(false);
    addWarning(11);
  }
  // 驗證其他建議
  if (form.advice.value.match(/(.{1,300})/g)) {
    validArry.push(true);
    const output = form.advice.value.trim();
    insertModalResult(output);
  } else {
    validArry.push(true);
    insertModalResult('無');
  }
}

/* ---------------------------------- */
/*           Button & Modal           */
/* ---------------------------------- */

// 按下 Button 驗證表單，全部成功顯示 Modal
form.addEventListener('submit', (e) => {
  e.preventDefault();
  elArry = [];
  validArry = [];
  data = [];
  formValuate();
  if (validArry.every(el => el === true)) {
    modal.style.display = 'flex';
  }
});

// 點擊 Modal 灰色區域關閉 Modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};


/* ---------------------------------- */
/*             使用者體驗               */
/* ---------------------------------- */

// 手機輸入自動加 +886
phoneInput.addEventListener('click', () => {
  if (!phoneInput.value) {
    phoneInput.value = '+886 ';
  }
});

// 手機輸入限制數字
phoneInput.addEventListener('keydown', (e) => {
  if (
    (e.keyCode >= 48 && e.keyCode <= 57)
    || (e.keyCode >= 96 && e.keyCode <= 105)
    || e.key === 'Backspace'
  ) {
    return e.key;
  }
  return e.preventDefault();
});

// 手機輸入每 3 數字補橫線
phoneInput.addEventListener('keyup', (event) => {
  if (event.key !== 'Backspace' || event.which !== 8) {
    if (phoneInput.value.length === 8 || phoneInput.value.length === 12) {
      phoneInput.value += '-';
    }
  }
});

// 簡答字數統計提醒
