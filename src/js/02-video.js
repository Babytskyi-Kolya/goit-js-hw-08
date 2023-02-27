import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(currentTime, 1000))

function currentTime (event){
    localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(event.seconds)
    )
};

player
.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
.then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});
