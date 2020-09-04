const form = document.querySelector('form');
const modalResult = document.querySelectorAll('.modal-body li');
const phoneInput = document.querySelector('#cell-phone');
const howknowInput = document.querySelector('#answer');
const adviceInput = document.querySelector('#advice');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-body span');
const printBtn = document.querySelector('#print');

let elArry = [];
let validArry = [];
let data = {};

function addWarning(element) {
  elArry.push(element);
  form.childNodes[element].classList.add('block-invalid', 'warning');
  form.childNodes[elArry[0]].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeWarning(element) {
  form.childNodes[element].classList.remove('block-invalid', 'warning');
}

function insertModalResult(key, value) {
  data[key] = value;
  if (Object.keys(data).length === 6) {
    for (let i = 0; i <= 5; i += 1) {
      modalResult[i].childNodes[1].textContent = Object.values(data)[i];
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
    insertModalResult('name', form.name.value);
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
    insertModalResult('email', form.email.value);
  } else {
    validArry.push(false);
    addWarning(5);
  }
  // 驗證手機號碼
  if (form.phone.value.match(/\+(886) ([\d]{3})-([\d]{3})-([\d]{3})/g)) {
    removeWarning(7);
    validArry.push(true);
    insertModalResult('phone', form.phone.value);
  } else {
    validArry.push(false);
    addWarning(7);
  }
  // 驗證報名類型
  if (form.category.value) {
    removeWarning(9);
    validArry.push(true);
    insertModalResult('category', form.category.value);
  } else {
    validArry.push(false);
    addWarning(9);
  }
  // 驗證怎麼知道活動
  if (form.howknow.value.match(/(.{1,100})/g)) {
    removeWarning(11);
    validArry.push(true);
    const output = form.howknow.value.trim();
    insertModalResult('howknow', output);
  } else {
    validArry.push(false);
    addWarning(11);
  }
  // 驗證其他建議
  if (form.advice.value.match(/(.{1,300})/g)) {
    validArry.push(true);
    const output = form.advice.value.trim();
    insertModalResult('advice', output);
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
  data = {};
  modal.style.display = 'flex';
  formValuate();
  if (validArry.every(el => el === true)) {
    modal.style.display = 'flex';
  }
});

// 點擊叉叉關閉 Modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
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
function countText(element, i, wordLimit) {
  element.addEventListener('focus', () => {
    form.childNodes[i].classList.add('text-count');
  });
  element.addEventListener('input', () => {
    form.childNodes[i].dataset.count = `${element.value.length} / ${wordLimit}`;
  });
  element.addEventListener('focusout', () => {
    form.childNodes[i].classList.remove('text-count');
  });
}

countText(howknowInput, 11, 100);
countText(adviceInput, 13, 300);

// PDF 列印
// 只有 client 端遇到好多依賴問題，我就直接硬畫ㄉ了...
// 也是體會到要印出來是可以多麼ㄉ困難...
function printUserData(e) {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({ unit: 'mm' });
  doc.setFillColor(250, 211, 18);
  doc.rect(5, 5, 200, 20, 'F');
  doc.setFillColor(0, 0, 0);
  doc.setFontSize(25);
  doc.addFont('./src/TaipeiSansTCBeta-Regular.ttf', 'TaipeiSansTCBeta-Regular', 'normal');
  doc.setFont('TaipeiSansTCBeta-Regular', 'normal');
  doc.text('新拖延運動報名成功', 65, 18);
  doc.setFontSize(15);
  doc.text(`暱稱 | ${data.name}`, 30, 40);
  doc.text(`電子信箱 | ${data.email}`, 30, 50);
  doc.text(`手機號碼 | ${data.phone}`, 30, 60);
  doc.text(`報名類型 | ${data.category}`, 30, 70);
  doc.text(`怎麼知道活動 | ${data.howknow}`, 30, 80, { maxWidth: '150' });
  doc.text(`其他 | ${data.advice}`, 30, 110, { maxWidth: '150' });
  doc.save();
}


printBtn.addEventListener('click', printUserData);
