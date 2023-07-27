const btn_sandwich = document.getElementById('btn_sandwich');
var body = document.querySelector('body')
const animationMenu = 'animationMenu'

const items = document.querySelectorAll('[data-show]')
const animationCSS = 'show'

function NotScroll()
{
    if(vazio.style.display != 'none') 
    {
        body.style.overflowY = 'hidden';
    }
    else
    {
        body.style.overflowY = 'scroll';
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
        vazio.style.display = 'none'
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
        vazio.style.display = 'block'
        btn_sandwich.innerText = 'close'
        btn_sandwich.classList.add(animationMenu)
    }

    NotScroll()
})

function animation()
{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5)

    items.forEach(function(element) {
        if((windowTop) > element.offsetTop)
            {
                element.classList.add(animationCSS);
            }
    })
}

window.addEventListener('scroll', function()
{
    animation()
})