import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Vimeo.Player('vimeo-player');
player.on('play', function (e) {
    
    console.log('played the video!');
});
player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(stopTime, 1000),{
    
});
        

function stopTime(evt) {
    
    const timeVideo = evt.seconds;
    
    localStorage.setItem("videoplayer-current-time", timeVideo);
};
const saveTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(saveTime).then(function () {

});


