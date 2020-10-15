/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import {
  signupController,
  signupValidation,
  loginController,
  cookieController,
  addCommentController,
  getCommentsController,
  logoutController,
} from '../../src/controller/index.js';

import template from '../../src/view/templates.js';
import { waveformComment } from '../../src/view/waveformComment.js';

const { dayjs } = window;
/**
 * DOM 元素選擇器
 * @const $dom
 * @link https://dev.to/mrahmadawais/use-instead-of-document-queryselector-all-in-javascript-without-jquery-3ef1
 */
const $dom = document.querySelector.bind(document);

const btnGroup = $dom('.button-group');
const signupAreaBtn = $dom('.sign-up');
const signUpArea = $dom('#signup-area');
const signUpForm = $dom('#signup-form');
const signUpBtn = $dom('#signup-btn');
const loginAreaBtn = $dom('.log-in');
const logInArea = $dom('#login-area');
const loginForm = $dom('#login-form');
const loginBtn = $dom('#login-btn');
const logoutAreaBtn = $dom('.log-out');
const commentArea = $dom('.comment-area');
const commentForm = $dom('#comment-form');
const commentSubBtn = $dom('#submit-comment');

console.log('感謝 min 同意使用封面照！');

/**
 * 撥動隱藏/顯示元素
 * @param {Array} 隱藏元素陣列
 * @param {Array} 顯示元素陣列
 */
function toggleElements(
  hideElements = [logInArea, signupAreaBtn, loginAreaBtn, signUpArea],
  showElements = [logoutAreaBtn, commentArea],
) {
  if (hideElements) {
    hideElements.forEach((e) => {
      e.classList.add('hide');
    });
  }
  if (showElements) {
    showElements.forEach((e) => {
      e.classList.remove('hide');
    });
  }
}

/**
 * 首頁「註冊」、「登入」按鈕監聽
 * @fires 顯示註冊表單區塊或登入表單區塊
 */
btnGroup.addEventListener('click', (e) => {
  if (e.target.classList.contains('sign-up')) {
    toggleElements([logInArea], [signUpArea]);
  } else {
    toggleElements([signUpArea], [logInArea]);
  }
});

/* ---------------------------------- */
/*               Cookie               */
/* ---------------------------------- */

/**
 * 留言表單自動填入使用者資料
 * @param {object} 使用者暱稱大頭照
 */
function setAttribute(data) {
  commentForm.querySelector('#comment-nickname').setAttribute('value', `${data.nickname}`);
  commentForm.querySelector('img').setAttribute('src', `${data.avatar}`);
  commentForm.querySelector('#user-nickname').textContent = data.nickname;
}

/**
 * 檢查 Cookie 紀錄
 */
async function checkCookie() {
  const cookieStore = cookieController.getCookie();
  // 檢查 Cookie 完整性
  if ('PHPSESSID' in cookieStore) {
    const userdata = await cookieController.validateCookie(cookieStore);
    const setData = {
      nickname: userdata.nickname,
      avatar: userdata.avatar,
    };
    toggleElements();
    setAttribute(setData);
    console.log('使用者已認證登入');
  } else {
    console.log('使用者尚未認證');
  }
}

/* ---------------------------------- */
/*                 註冊                */
/* ---------------------------------- */

/**
 * 大頭照 1-100 亂數生成
 * @summary 使用 Adorable Avatar API
 * @link http://avatars.adorable.io/
 * @returns {number} 1-100
 * @deprecated Adorable Avatar 2020/10/14 Server 無回應
 */
function randomAvatar() {
  return Math.floor(Math.random() * 100);
}

const inputNicknameField = $dom('#signup-nickname');
const inputUsernameField = $dom('#signup-username');
const inputPasswordField = document.querySelectorAll('#signup-password input');
const warning = $dom('.warning');

function toggleWarningUI(text, toggleObj) {
  const { nickname, username, password } = toggleObj;
  inputNicknameField.classList.toggle('invalid', nickname);
  inputUsernameField.classList.toggle('invalid', username);
  if (password === true) {
    inputPasswordField.forEach((e) => {
      e.classList.toggle('invalid');
    });
  }
  warning.textContent = text;
  warning.classList.toggle('warning-show', text);
}

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const validation = signupValidation(signUpForm);
  let toggleUI = {
    nickname: false,
    username: false,
    password: false,
  };
  switch (validation) {
    case 'invalid-nickname':
      toggleUI.nickname = true;
      toggleWarningUI('暱稱空白或包含不核可字元', toggleUI);
      break;
    case 'invalid-username':
      toggleUI.username = true;
      toggleWarningUI('帳號空白或包含不核可字元', toggleUI);
      break;
    case 'invalid-names':
      toggleUI = { nickname: true, username: true };
      toggleWarningUI('暱稱不可與帳號一致', toggleUI);
      break;
    case 'invalid-password':
      toggleUI.password = true;
      toggleWarningUI('密碼空白或密碼不一致', toggleUI);
      break;
    case 'all-pass':
      // eslint-disable-next-line no-case-declarations
      const signupData = {
        nickname: signUpForm.nickname.value,
        username: signUpForm.username.value,
        password: signUpForm.password2.value,
        avatar: `https://avatars.dicebear.com/api/initials/${signUpForm.nickname.value}.svg`,
      };

      signupController(signupData).then(() => {
        checkCookie();
      });
      break;
    default:
      warning.textContent = '系統錯誤，請聯絡開發者';
      warning.classList.toggle('warning-show');
      break;
  }
});

/* ---------------------------------- */
/*                 登入                */
/* ---------------------------------- */

/**
 * 資料庫查找登入資訊
 * @async
 * @function loginController
 * @param {object} 登入資訊物件
 */
async function loginSubmit(data) {
  try {
    await loginController(data);
    checkCookie();
  } catch (err) {
    console.log('main.js Error', err);
  }
}

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!loginForm.username.value || !loginForm.password.value) {
    console.log('帳號或密碼為空');
  } else {
    const loginData = {
      username: loginForm.username.value,
      password: loginForm.password.value,
    };
    loginSubmit(loginData);
  }
});

/* ---------------------------------- */
/*                發佈留言              */
/* ---------------------------------- */

async function postComment(data) {
  Object.assign(data, {
    nickName: commentForm.querySelector('#comment-nickname').value,
    avatar: commentForm.querySelector('img').getAttribute('src'),
    createdTime: dayjs(Date.now()),
    audioTime: window.audio_play_time_float,
  });
  template.reviewBlock(data);
  waveformComment(data);
  try {
    await addCommentController(data);
  } catch (error) {
    console.log(error);
  }
}

commentSubBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!commentForm.comment.value) {
    console.log('請填寫留言');
  } else {
    const data = {
      userName: commentForm.user.value,
      content: commentForm.comment.value,
      audioTime: commentForm.audioTime.value,
    };
    postComment(data);
    commentForm.comment.value = '';
  }
});

/* ---------------------------------- */
/*                歷史留言             */
/* ---------------------------------- */

async function getComments() {
  try {
    const data = await getCommentsController();
    data.forEach((d) => {
      template.reviewBlock({
        nickName: d.nickname,
        avatar: d.avatar,
        content: d.content,
        audioTime: d.audio_time,
        createdTime: d.created_time,
      });
      waveformComment({
        nickName: d.nickname,
        avatar: d.avatar,
        content: d.content,
        audioTime: d.audio_time,
        createdTime: d.created_time,
      });
    });
  } catch (error) {
    console.log(error);
  }
}

/* ---------------------------------- */
/*                 登出                */
/* ---------------------------------- */
async function logOutClean() {
  await logoutController();
  const cookieName = ['PHPSESSID'];
  cookieName.forEach((c) => {
    document.cookie = `${c}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}

logoutAreaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  logOutClean();
  toggleElements([logoutAreaBtn, commentArea], [signupAreaBtn, loginAreaBtn]);
});
/* ---------------------------------- */
/*               網站監聽              */
/* ---------------------------------- */

window.addEventListener('load', () => {
  getComments();
  checkCookie();
});
