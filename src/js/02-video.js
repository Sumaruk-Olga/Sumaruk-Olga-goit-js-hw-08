import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

 const KEY_TO_LOCALSTORAGE = "videoplayer-current-time";
const timeToStart = localStorage.getItem(KEY_TO_LOCALSTORAGE);


 const onPlay = function(data) {
//     // data is an object containing properties specific to that event     
    //  console.log(data);
     localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(data.seconds));    
    //  console.log('timeToStart', timeToStart);
};

player.on('timeupdate', throttle(onPlay, 1000));

// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>

player.setCurrentTime(timeToStart).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration');
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            console.log(error.name);
            break;
    }
});


// on(event: string, callback: function): void

// Add an event listener for the specified event. Will call the callback with a
//single parameter, data, that contains the data for that event.See events below
//for details.

// Додайте обробник подій для вказаної події. Викличе зворотний виклик з одним
// //параметром, dataякий містить дані для цієї події.Подробиці дивіться нижче.

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
//______________________________________
// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>

// Set the current playback position in seconds. Once playback has started, if the
// player was paused, it will remain paused.Likewise, if the player was playing, it
// will resume playing once the video has buffered.Setting the current time before
//playback has started will cause playback to start.
// You can provide an accurate time and the player will attempt to seek to as close
// to that time as possible. The exact time will be the fulfilled value of the promise.

// Встановіть поточну позицію відтворення в секундах. Після початку відтворення, якщо
//програвач було призупинено, воно залишиться призупиненим.Аналогічно, якщо програвач
//відтворював, він відновиться після буферизації відео.Установлення поточного часу
//перед початком відтворення призведе до початку відтворення.
// Ви можете вказати точний час, і гравець намагатиметься знайти якомога ближче до
//цього часу.Точний час буде виконаною цінністю обіцянки.

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

//__________________________________________
// timeupdate

// Triggered as the currentTime of the video updates. It generally fires every 250ms,
//but it may vary depending on the browser.

// Активується як currentTimeоновлення відео. Зазвичай він запускається кожні 250 мс,
// але це може відрізнятися залежно від браузера.

// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }


