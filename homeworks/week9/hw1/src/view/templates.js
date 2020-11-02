/* eslint-disable import/extensions */
import { escapeText } from './html_escape.js';

const { dayjs } = window;

function formatAudioTime(time) {
  if (time === undefined) {
    return '0:00';
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  if (seconds < 10) {
    const zeroseconds = `0${seconds}`;
    return `${minutes}:${zeroseconds}`;
  }
  return `${minutes}:${seconds}`;
}

const reviewArea = document.querySelector('.review-area');

const template = {
  reviewBlock(data) {
    // eslint-disable-next-line object-curly-newline
    const { nickName, avatar, content, audioTime, createdTime } = data;
    const el = document.createElement('div');
    el.className = 'review-block';
    el.innerHTML = `
    <div class="avatar">
      <img src="${avatar}" alt="${nickName}_avatar">
    </div>
    <div class="review-detail">
      <div class="review-info">
        <h4>${escapeText(nickName)}</h4>
        <p>${formatAudioTime(audioTime)}</p>
      </div>
    <div class="review-content">
      <p>${escapeText(content)}</p>
    </div>
    <div class="review-time">
      <p>${dayjs(createdTime).format('YYYY-MM-DD HH:mm')}</p>
    </div>
    </div>
    `;
    reviewArea.appendChild(el);
  },
};

export default template;
