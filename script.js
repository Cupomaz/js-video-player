const video = document.getElementsByTagName("video");
const playButton = document.getElementsByName("playButton");
const range = document.getElementsByName("range");
const backwards = document.getElementsByName("backwards");
const forwards = document.getElementsByName("forwards");

for(i = 0; i < video.length; i++){
    video[i].addEventListener('timeupdate', (e) => {
        let currentRange = e.target.nextElementSibling.children[3].children[0];
        currentRange.value = e.target.currentTime * 10;
    })
}

for(i = 0; i < playButton.length; i++){
    playButton[i].addEventListener('click', (e) => {
        let currentVideo = e.target.parentElement.previousElementSibling;
        if(currentVideo.paused){
            currentVideo.play();
            e.target.children[0].setAttribute("class", "fas fa-pause");
        }
        else{
            currentVideo.pause();
            e.target.children[0].setAttribute("class", "fas fa-play");
        }
    })
}

for(i = 0; i < range.length; i++){
    range[i].parentElement.parentElement.previousElementSibling.onloadedmetadata = function(e){
        let currentRange = e.target.nextElementSibling.children[3].children[0];
        currentRange.setAttribute("max", e.target.duration * 10);
    }
    range[i].addEventListener('input', (e) => {
        let currentVideo = e.target.parentElement.parentElement.previousElementSibling;
        currentVideo.currentTime = e.target.value / 10;
    })
}

for(i = 0; i < backwards.length; i++){
    backwards[i].addEventListener('click', (e)=>{
        let currentVideo = e.target.parentElement.previousElementSibling;
        currentVideo.currentTime -= 5;
    })
}

for(i = 0; i < forwards.length; i++){
    forwards[i].addEventListener('click', (e)=>{
        let currentVideo = e.target.parentElement.previousElementSibling;
        currentVideo.currentTime += 5;
    })
}