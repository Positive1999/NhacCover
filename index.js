var currentVideo = null;

function togglePlayPause(event) {
    var video = event.target;
    var playIcon = event.target.nextElementSibling;
    var videoTime = event.target.nextElementSibling.nextElementSibling;

    if (currentVideo === video) {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";
        } else {
            video.pause();
            playIcon.style.display = "block";
        }
    } else {
        if (currentVideo !== null) {
            currentVideo.pause();
            var currentPlayIcon = currentVideo.nextElementSibling;
            currentPlayIcon.style.display = "block";
        }

        video.play();
        playIcon.style.display = "none";
        currentVideo = video;
    }

    video.addEventListener("timeupdate", function () {
        var currentTime = formatTime(video.currentTime);
        var duration = formatTime(video.duration);
        videoTime.textContent = currentTime + "/" + duration;
    });

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return padZero(minutes) + ":" + padZero(seconds);
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
}