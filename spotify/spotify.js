let audioelement= new Audio('3.mp3');
let playbutton=document.getElementById('playbutton');
let progressbar=document.getElementById('playback');
let songindex=0;
let playbuttoneach=Array.from(document.getElementsByClassName('eachplay'));
let gif=document.getElementById('gifimg');
let songlist=Array.from(document.getElementsByClassName('songlist'));
let loopbutton=document.getElementById('loop');

// audioelement.play();
let spotify=[
    {SongName:"Legion", filePath: "1.mp3", CoverPath:"spotify/1.jpg"},
    {SongName:"Trap", filePath: "2.mp3", CoverPath:"spotify/2.jpg"},
    {SongName:"They mad", filePath: "3.mp3", CoverPath:"spotify/3.jpg"},
    {SongName:"plug walk", filePath: "4.mp3", CoverPath:"spotify/4.jpg"},
    {SongName:"song title", filePath: "5.mp3", CoverPath:"spotify/5.jpg"},
    {SongName:"safety dance", filePath: "6.mp3", CoverPath:"spotify/6.jpg"},
    {SongName:"Back it Up", filePath: "7.mp3", CoverPath:"spotify/7.jpg"},
    {SongName:"emma", filePath: "8.mp3", CoverPath:"spotify/8.jpg"},
    {SongName:"friends", filePath: "9.mp3", CoverPath:"spotify/9.jpg"},
    {SongName:"True love", filePath: "10.mp3", CoverPath:"spotify/10.jpg"},
]

songlist.forEach((element,i)=>{
    
element.getElementsByTagName("img").src=spotify[i].CoverPath;
element.getElementsByClassName("song-details").innerText=spotify[i].SongName;                                           
})
playbutton.addEventListener('click',()=>{
    
   if(audioelement.paused || audioelement.currentTime<=0) {
    audioelement.play();
gif.style.opacity=1;
    
   }
   else{
    audioelement.pause();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
    gif.style.opacity=0;
   }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
})
const makeplay=()=>{
    playbuttoneach.forEach((element)=>{
        if (element.id !== songindex.toString()) {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    })
}
playbuttoneach.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeplay();
         songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<0){
        songindex=1;
    }
    else{
        songindex-=1;
    }
     audioelement.src=`${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>10){
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
})


audioelement.addEventListener('ended',()=>{
    songindex+=1;
    if(songindex>=spotify.length){
        songindex=0;
    }
    audioelement.src=spotify[songindex].filePath;
    audioelement.currentTime=0;
    audioelement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
})
loopbutton.addEventListener('click',()=>{
if(audioelement.loop){
    audioelement.loop=false;
    loopbutton.style.color = '#FFF';
    
}
else{
    audioelement.loop=true;
    loopbutton.style.color = 'green';
}
})