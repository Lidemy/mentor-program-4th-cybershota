/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { escapeText } from './html_escape.js';

const waveformCommentBlock = document.querySelector('.waveform-comment-block');

function commentPosition(timeFloat) {
  // 這邊先寫死
  // window.audio_duration 有時間差，需要 Promise
  // 想一想有點複雜先跳過。
  const windowAudioDuration = 261.87;
  let positionPercent = (timeFloat / windowAudioDuration) * 100;
  if (positionPercent > 98) {
    positionPercent = 94;
  } else if (positionPercent < 2) {
    positionPercent = 1.5;
  }
  return positionPercent - 1.5;
}

function randomHorizontalPosition() {
  const position = Math.floor(Math.random() * 35);
  return position;
}

export function waveformComment(data) {
  // eslint-disable-next-line object-curly-newline
  const { nickName, avatar, content, audioTime } = data;
  const el = document.createElement('div');
  el.className = 'waveform-comment';

  if (commentPosition(audioTime) < 85) {
    el.innerHTML = `
    <img src=${avatar} alt="">
    <div class="waveform-comment-detail">
      <div class="comment-tooltip">
        <h6>${escapeText(nickName)}</h6>
        <p>${escapeText(content)}</p>
      </div>
    </div>
  `;
    el.style.left = `${commentPosition(audioTime)}%`;
    el.style.bottom = `${randomHorizontalPosition()}px`;
    waveformCommentBlock.appendChild(el);
  } else {
    el.innerHTML = `
    <img src=${avatar} alt="">
    <div class="waveform-comment-detail">
      <div class="comment-tooltip tooltip-left">
        <h6>${nickName}</h6>
        <p>${content}</p>
      </div>
    </div>
  `;
    el.style.left = `${commentPosition(audioTime)}%`;
    el.style.bottom = `${randomHorizontalPosition()}px`;
    waveformCommentBlock.appendChild(el);
  }
}
