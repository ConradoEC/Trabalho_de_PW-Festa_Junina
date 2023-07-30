var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
var content4 = document.getElementById('content4');

const discSong = document.getElementById('play');
const songName = document.getElementById('song_name');
const bandName = document.getElementById('band_name')
const song = document.getElementById('audio');
const currentProgress = document.getElementById('current-progress');
const play = document.getElementById('play');
const next = document.getElementById('next');
const back = document.getElementById('back');
const no_sense = document.getElementById('no_sense');
const comeBack = document.getElementById('comeBack');
const banner = document.getElementById('banner_img');
let music = ['https://conradoec.github.io/Trabalho_de_PW-Festa_Junina/Musicas/SnapInsta.io-Boi Bumbá(720p).mp4', 'https://conradoec.github.io/Trabalho_de_PW-Festa_Junina/Musicas/O Xote das Meninas.mp4', 'https://conradoec.github.io/Trabalho_de_PW-Festa_Junina/Musicas/SnapInsta.io-Dominguinhos - _Eu Só Quero Um Xodó_ (O Forró do Dominguinhos_2003)-(480p).mp4', 'https://conradoec.github.io/Trabalho_de_PW-Festa_Junina/Musicas/SnapInsta.io - Xote Dos Milagres (128 kbps).mp3', 'https://conradoec.github.io/Trabalho_de_PW-Festa_Junina/Musicas/SnapInsta.io-Vem Morena(720p).mp4']
let image = ['https://i.im.ge/2023/06/19/icWCCK.download.jpg',
            'https://i.im.ge/2023/06/19/icWY68.download.jpg', 
            'https://i.im.ge/2023/06/19/icKiOx.imagesqtbnANd9GcRqWIcXiyOH2XlmXWivdorsJuad6cDGN-UlDgampusqpCAU.jpg', 
            'https://i.im.ge/2023/06/19/icK0ma.imagesqtbnANd9GcSIMKjCaa0h5FyWjk4KBsn-Yj1DvdmNAAucsAampusqpCAU.jpg', 
            'https://i.im.ge/2023/06/19/icKEm8.download.jpg']
let realSongName = ['Boi Bumbá', 'O Xote das Meninas', 'Eu Só Quero Um Xodó', 'Xote Dos Milagres', 'Vem Morena']
let singer = ['Luiz Gonzaga', 'Luiz Gonzaga', 'Dominguinhos', 'Fala Mansa', 'Luiz Gonzaga']
let isPlaying = false;
let allSongs = 0;





var body = document.querySelector('body')
const btn_sandwich = document.getElementById('btn_sandwich');
const animationMenu = 'animationMenu'

function NotScroll()
{
    if(vazio_menu.style.display != 'none') 
    {
        body.style.overflowY = 'hidden';
    }
    else
    {
        body.style.overflowY = 'scroll';
    }
}

function chooseItems()
{
    banner.src = image[allSongs];
    songName.innerText = realSongName[allSongs];
    bandName.innerText = singer[allSongs];
    song.src = music[allSongs];
}

function playSong()
{
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    isPlaying = true;
    song.play()
}

function pauseSong()
{
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    isPlaying = false;
    song.pause()
}

function nextSong()
{
    if(allSongs === music.length -1)
    {
        allSongs = 0;
    }
    else
    {
        allSongs++
    }
    chooseItems()
    playSong()
}

function backSong()
{   
    if(allSongs === 0)
    {
        allSongs = music.length -1;
    }
    else
    {
        allSongs--
    }
    chooseItems()
    playSong()
}

function no_senseSong(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function comeBackSong()
{
    chooseItems()
    playSong()
    console.log(allSongs)
}

function UpdateProgressBar()
{
    const barWidth = (song.currentTime/song.duration)*100
    currentProgress.style.setProperty('--progress', `${barWidth}%`)

    if(barWidth == 100)
    {
        nextSong()
    }
}



btn_sandwich.addEventListener('click', function()
{
    if(list.style.height == '35vh')
    {
        list.style.height = '0vh'
        list.style.opacity = '0'
        list.style.overflow = 'hidden'
        list.style.transition = 'height 0.3s 0.05s, opacity 0.3s 0s'
        menu_icon.style.backgroundColor = 'transparent'
        menu_icon.style.transition = '0.2s 0s'
        vazio_menu.style.display = 'none'
        btn_sandwich.innerText = 'menu'
        btn_sandwich.classList.remove(animationMenu)
    }
    else
    {
        list.style.height = '35vh'
        list.style.opacity = '1'
        list.style.overflow = 'visible'
        list.style.transition = 'height 0.3s 0s, opacity 0.3s 0.1s'
        menu_icon.style.backgroundColor = 'rgb(233, 215, 199)'
        menu_icon.style.transition = '0.35s 0.1s'
        vazio_menu.style.display = 'block'
        btn_sandwich.innerText = 'close'
        btn_sandwich.classList.add(animationMenu)
    }

    NotScroll()
})

song.addEventListener('timeupdate', UpdateProgressBar)

play.addEventListener('click', function()
{   if( isPlaying === false)
    {
        playSong()
    }
    else
    {
        pauseSong()
    }
})

next.addEventListener('click', function()
{
    nextSong()
})

back.addEventListener('click', function()
{
    backSong()
})

comeBack.addEventListener('click', function()
{
    comeBackSong();
})

no_sense.addEventListener('click', function()
{
    let value = no_senseSong(0, 4);
    song.src = music[value]
    banner.src = image[value]
    songName.innerText = realSongName[value]
    bandName.innerText = singer[value]
    console.log(value)
    playSong()
})

content1.addEventListener('click', function(e)
{
    if(arrow_1.style.rotate == '180deg')
    {
        arrow_1.style.rotate = '0deg';
        c1.classList.remove('show');
    }
    else
    {
        arrow_1.style.rotate = '180deg';
        c1.classList.add('show');
    }

})

content2.addEventListener('click', function(e)
{
    if(arrow_2.style.rotate == '180deg')
    {
        arrow_2.style.rotate = '0deg';
        c2.style.display = 'none';
    }
    else
    {
        arrow_2.style.rotate = '180deg';
        c2.style.display = 'block';
    }

})

content3.addEventListener('click', function(e)
{
    if(arrow_3.style.rotate == '180deg')
    {
        arrow_3.style.rotate = '0deg';
        c3.style.display = 'none';
    }
    else
    {
        arrow_3.style.rotate = '180deg';
        c3.style.display = 'block';
    }

})

content4.addEventListener('click', function(e)
{
    if(arrow_4.style.rotate == '180deg')
    {
        arrow_4.style.rotate = '0deg';
        c4.style.display = 'none';
    }
    else
    {
        arrow_4.style.rotate = '180deg';
        c4.style.display = 'block';
    }

})