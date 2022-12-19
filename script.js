console.log("welome")
// initialize the variables
let songIndex = 0;
let audioelement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Cheap Thrills", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Let me love you", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Rap God", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kalank ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Agar Tum  Ho", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tamasha", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Haiya Haiya", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();


// Handel play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})

audioelement.addEventListener('timeupdate', ()=>{
    // update seek bar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex +1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>7){
//         songIndex = 0
//     }
//     else{
//         songIndex +=1;
//     }
//     audioelement.src = `songs/${songIndex +1}.mp3`;
//     audioelement.currentTime = 0;
//     audioelement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioelement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioelement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})