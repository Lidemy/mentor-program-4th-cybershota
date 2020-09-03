const form = document.querySelector('form');
const phoneInput = document.querySelector('#cell-phone');
const modal = document.querySelector('.modal');

// 表單驗證
// HTML form 使用 novalidate 關閉內建驗證
// 使用純 JavaScript 做驗證程序
function formValuate() {
  // 驗證暱稱
  if (form.name.value.match(/^[^\s].{0,18}[^\s]$/g)) {
    console.log('暱稱驗證通過');
  } else {
    console.log('暱稱驗證未通過');
    return;
  }
  // 驗證電子郵件
  if (
    form.email.value.match(
      /^(?:(([a-z0-9](([-!#$*+\w])(?:\.)?(?!\.))+))(?<!\.)@)(?:([0-9a-z][-0-9a-z]*[0-9a-z]*\.)+[a-z0-9]{0,22}[a-z0-9]$)/g,
    )
  ) {
    console.log('電郵驗證通過');
  } else {
    console.log('電郵驗證未通過');
    return;
  }
  // 驗證手機號碼
  if (form.phone.value.match(/\+(886) ([\d]{3})-([\d]{3})-([\d]{3})/g)) {
    console.log('手機驗證通過');
  } else {
    console.log('手機驗證未通過');
    return;
  }
  // 驗證報名類型
  if (form.category.value) {
    console.log(`勾選驗證成功：${form.category.value}`);
  } else {
    console.log('勾選驗證失敗');
    return;
  }
  // 驗證知道活動
  if (form.howknow.value.match(/([\w\d]{1,100})/g)) {
    const output = form.howknow.value.trim();
    console.log(`怎麼知道的：${output}`);
  } else {
    console.log('未填寫怎麼知道的');
    return;
  }
  // 驗證其他
  if (form.advice.value.match(/([\w\d]{1,500})/g)) {
    const output = form.advice.value.trim();
    console.log(`建議：${output}`);
  } else {
    console.log('未填寫建議');
  }
}

phoneInput.addEventListener('click', () => {
  if (!phoneInput.value) {
    phoneInput.value = '+886 ';
  }
});

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

phoneInput.addEventListener('keyup', (event) => {
  console.log('keyup');
  if (event.key !== 'Backspace' || event.which !== 8) {
    if (phoneInput.value.length === 8 || phoneInput.value.length === 12) {
      phoneInput.value += '-';
    }
  }
});

// 按下 Button 顯示 Modal
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 如果驗證未通過，滑至第一個未通過的輸入框
  // 如果驗證通過，顯示 Modal 確認資料
  modal.style.display = 'flex';
  console.log(form.name.value);
  formValuate();
});

// 點擊 Modal 灰色區域關閉 Modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
