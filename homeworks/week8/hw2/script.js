// eslint-disable-next-line import/extensions
import template from './template.js';

const APIURL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'agcz06tlg03ulhxzaggv6bp2by5d5d';

let playVideo;

function getGamesData() {
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(this.response);
    data.top.forEach((d) => {
      template.category(d.game.box.large, d.game.localized_name, d.viewers);
    });
  } else {
    console.log(this.error);
  }
}

// Get Top Games
function requestTopGames() {
  const request = new XMLHttpRequest();
  request.open('GET', `${APIURL}/games/top?limit=4`);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = getGamesData;
  request.send();
}

function getLiveChannels() {
  if (this.status >= 200 && this.status < 400) {
    // console.log(JSON.parse(this.response));
    const data = JSON.parse(this.response);
    data.streams.forEach((d) => {
      template.recommendChannel(
        d.channel.logo,
        d.channel.display_name,
        d.channel.name,
        d.channel.game,
        d.viewers,
      );
    });
  } else {
    console.log(this.error);
  }
}

// Get Channels
function requestChannels() {
  const request = new XMLHttpRequest();
  request.open('GET', `${APIURL}/streams?language=zh&limit=10`);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = getLiveChannels;
  request.send();
}

function getMayLikeLive() {
  if (this.status >= 200 && this.status < 400) {
    // console.log(JSON.parse(this.response));
    const data = JSON.parse(this.response);
    data.streams.forEach((d) => {
      template.mayLikeLive(
        d.preview.large,
        d.channel.description,
        d.channel.display_name,
        d.channel.name,
        d.channel.game,
        d.viewers,
      );
    });
  } else {
    console.log(this.error);
  }
}

// Get Live
function requestMayLikeLive() {
  const request = new XMLHttpRequest();
  request.open('GET', `${APIURL}/streams?stream_type=live&limit=2`);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = getMayLikeLive;
  request.send();
}

// 頁面第一次載入

function autoPlay() {
  const main = document.querySelector('.main .iframe-inject').getAttribute('id');
  playVideo = template.carouselPlay(main);
}

function getClips() {
  console.log(JSON.parse(this.response));
  const data = JSON.parse(this.response);
  data.featured.forEach((d, index) => {
    template.carouselTemplate(
      index,
      d.stream.channel.name,
      d.stream.channel.display_name,
      d.stream.preview.large,
      d.stream.channel.logo,
      d.stream.game,
      d.stream.channel.language,
      d.stream.channel.description,
      d.stream.viewers,
    );
  });
  autoPlay();
}

// Get Clips
function requestClips() {
  const request = new XMLHttpRequest();
  request.open('GET', `${APIURL}/streams/featured?limit=5`);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = getClips;
  request.send();
}

requestClips();
requestChannels();
requestTopGames();
requestMayLikeLive();

/* ---------------------------------- */
/*                 輪播                */
/* ---------------------------------- */

const carouselPosition = [
  'left-last-card',
  'left-first-card',
  'main',
  'right-first-card',
  'right-last-card',
];

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const carouselCard = document.querySelectorAll('.carousel-card');

function playCarousel() {
  const channelId = document.querySelector('.main .iframe-inject').getAttribute('id');
  playVideo = template.carouselPlay(channelId);
}

function stopCarousel(left, right) {
  if (left) {
    const leftChannelId = document.querySelector('.left-first-card .iframe-inject');
    leftChannelId.innerHTML = '';
  }

  if (right) {
    const rightChannelId = document.querySelector('.right-first-card .iframe-inject');
    rightChannelId.innerHTML = '';
  }
}

leftArrow.addEventListener('click', () => {
  carouselCard.forEach((el) => {
    const position = el.classList[1];
    el.classList.remove(...el.classList);
    switch (position) {
      case 'left-last-card':
        el.classList.add('carousel-card', `${carouselPosition[4]}`);
        break;
      case 'left-first-card':
        el.classList.add('carousel-card', `${carouselPosition[0]}`);
        break;
      case 'main':
        el.classList.add('carousel-card', `${carouselPosition[1]}`);
        stopCarousel(true, false);
        break;
      case 'right-first-card':
        el.classList.add('carousel-card', `${carouselPosition[2]}`);
        playCarousel();
        break;
      case 'right-last-card':
        el.classList.add('carousel-card', `${carouselPosition[3]}`);
        break;
      default:
        break;
    }
  });
});

rightArrow.addEventListener('click', () => {
  carouselCard.forEach((el) => {
    const position = el.classList[1];
    el.classList.remove(...el.classList);
    switch (position) {
      case 'left-last-card':
        el.classList.add('carousel-card', `${carouselPosition[1]}`);
        break;
      case 'left-first-card':
        el.classList.add('carousel-card', `${carouselPosition[2]}`);
        playCarousel();
        break;
      case 'main':
        el.classList.add('carousel-card', `${carouselPosition[3]}`);
        stopCarousel(false, true);
        break;
      case 'right-first-card':
        el.classList.add('carousel-card', `${carouselPosition[4]}`);
        break;
      case 'right-last-card':
        el.classList.add('carousel-card', `${carouselPosition[0]}`);
        break;
      default:
        break;
    }
  });
});

/* ---------------------------------- */
/*               視訊控制               */
/* ---------------------------------- */

document.addEventListener('click', (e) => {
  if (e.target.closest('.play-btn')) {
    if (playVideo.isPaused()) {
      const playBtn = document.querySelector('.main .play-btn');
      playVideo.play();
      playBtn.childNodes[1].setAttribute('src', './src/play_btn.svg');
    } else {
      const playBtn = document.querySelector('.main .play-btn');
      playVideo.pause();
      playBtn.childNodes[1].setAttribute('src', './src/pause.svg');
    }
  } else if (e.target.closest('.full')) {
    const video = document.querySelector('.main .iframe-inject');
    video.webkitRequestFullscreen();
  }
});
