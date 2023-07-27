var click_copo_da_felicidade = document.getElementById('click_copo_da_felicidade');
var click_torta = document.getElementById('click_torta');
var click_pave = document.getElementById('click_pave');
var click_bolo_de_pote = document.getElementById('click_bolo_de_pote');
var click_milho_cozido = document.getElementById('click_milho_cozido');
var click_arroz_doce = document.getElementById('click_arroz_doce');
var click_bolo_de_milho = document.getElementById('click_bolo_de_milho');
var click_quentao = document.getElementById('click_quentao');

var moveSlide = document.querySelectorAll('[data-move]');
var moveSlide2 = document.querySelectorAll('[data-move2]');
var moveSlide3 = document.querySelectorAll('[data-move3]');
var moveSlide4 = document.querySelectorAll('[data-move4]');
var moveSlide5 = document.querySelectorAll('[data-move5]');
var moveSlide6 = document.querySelectorAll('[data-move6]');
var moveSlide7 = document.querySelectorAll('[data-move7]');
var moveSlide8 = document.querySelectorAll('[data-move8]');

const modal_window2 = document.querySelector('#modal_window');
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

function block1()
{
    modal_window2.classList.add('show')

    NotScroll()

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show');
            body.style.overflowY = 'scroll';
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show');
            body.style.overflowY = 'scroll';
            
        }
    })
}

function block2()
{
    modal_window2.classList.add('modal_window2')

    modal_window2.classList.add('show')

    NotScroll()

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window2')
            body.style.overflowY = 'scroll';
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window2')
            body.style.overflowY = 'scroll';
        }
    })
}

function block3()
{
    modal_window2.classList.add('modal_window3')

    modal_window2.classList.add('show')

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'background')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window3')
        }
    })

    modal_window2.addEventListener('click', function(e) {
        if(e.target.id == 'close')
        {
            modal_window2.classList.remove('show')
            modal_window2.classList.remove('modal_window3')
        }
    })
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




click_copo_da_felicidade.addEventListener('click', function(e) {

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up');
    })

    moveSlide4.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    moveSlide5.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    moveSlide6.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    moveSlide7.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    moveSlide8.forEach( item => 
    {
        item.classList.remove('on')
        item.classList.remove('show_up')
    })

    modal_first.classList.add('on');
    modal_first.classList.add('show_up')
})




click_torta.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_second.classList.add('on');
    modal_second.classList.add('show_up')
})




click_pave.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_third.classList.add('on');
    modal_third.classList.add('show_up')
})




click_bolo_de_pote.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_fourth.classList.add('on');
    modal_fourth.classList.add('show_up')
})




click_milho_cozido.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_fifth.classList.add('on');
    modal_fifth.classList.add('show_up')
})





click_arroz_doce.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_sixth.classList.add('on');
    modal_sixth.classList.add('show_up')
})





click_bolo_de_milho.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide8.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_seventh.classList.add('on');
    modal_seventh.classList.add('show_up')
})





click_quentao.addEventListener('click', function(e) {

    moveSlide.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide2.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide3.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide4.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide5.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide6.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    moveSlide7.forEach(item => 
    {
        item.classList.remove('on');
        item.classList.remove('show_up');
    })

    modal_eighth.classList.add('on');
    modal_eighth.classList.add('show_up')
})