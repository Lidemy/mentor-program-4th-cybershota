/* eslint-disable import/prefer-default-export */
export function formatAudioTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  window.audio_play_minutes = `${minutes}`;
  window.audio_play_seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
}
