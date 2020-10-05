/* eslint-disable no-alert */
const { confetti } = window;

const strowInfo = document.querySelector('.lottery-info');
const strowResult = document.querySelector('.lottery-result');
const strowBtn = document.querySelector('.lottery-info__btn');
const background = document.querySelector('.background');
const airplaneVideo = document.querySelector('#airplane');
const sonyTvVideo = document.querySelector('#sonytv');
const roberP = document.querySelector('#robertP');
const baseURL = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';

/* ---------------------------------- */
/*              Confetti              */
/* ---------------------------------- */

const myCanvas = document.querySelector('.confetti-canvas');

function popConfetti() {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
  });

  myConfetti({
    particleCount: 1000,
    spread: 360,
    gravity: 0.3,
    ticks: 400,
    startVelocity: 55,
  });

  setTimeout(() => {
    myConfetti.reset();
  }, 8000);
}

/* ---------------------------------- */
/*                 API                */
/* ---------------------------------- */
function renderResult(prize) {
  const prizeTitle = strowResult.childNodes[1];
  strowInfo.classList.add('slide-out-top');
  background.classList.remove('initial-bg');
  console.log(strowResult.childNodes[1]);
  switch (prize) {
    case 'FIRST':
      prizeTitle.textContent = '恭喜你中頭獎了！日本東京來回雙人遊！';
      airplaneVideo.classList.remove('hide');
      setTimeout(popConfetti, 550);
      break;
    case 'SECOND':
      prizeTitle.textContent = '二獎！90 吋電視一台！';
      sonyTvVideo.classList.remove('hide');
      setTimeout(popConfetti, 550);
      break;
    case 'THIRD':
      prizeTitle.textContent = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
      roberP.classList.remove('hide');
      setTimeout(popConfetti, 550);
      break;
    case 'NONE':
      prizeTitle.textContent = '銘謝惠顧囉';
      background.classList.add('initial-bg', 'lose-bg');
      break;
    default:
      alert('系統忙碌，請再試一次');
      break;
  }
  strowResult.classList.remove('hide');
  strowResult.classList.add('bounce-in-fwd');
}

function getLottery() {
  if (this.status >= 200 && this.status < 400) {
    let data;
    try {
      data = JSON.parse(this.response);
      renderResult(data.prize);
    } catch (err) {
      console.log(err, this.status);
      alert('系統忙碌，請再試一次');
    }
  } else {
    alert('系統忙碌，請再試一次');
  }
}

function requestLottery() {
  const request = new XMLHttpRequest();
  request.open('GET', baseURL);
  request.onload = getLottery;
  request.onerror = (err) => {
    console.log(err);
    alert('系統忙碌，請再試一次');
  };
  request.send();
}

/* ---------------------------------- */
/*           Event Listener           */
/* ---------------------------------- */

strowBtn.addEventListener('click', () => {
  requestLottery();
});
