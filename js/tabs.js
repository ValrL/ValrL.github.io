let tabs = document.querySelector('.services-container')
let buttons = tabs.querySelectorAll('.tabs-title')
let items = tabs.querySelectorAll('.tabs-item')

function change(arr, i) {
    arr.forEach( item => {
        item.forEach( i => {i.classList.remove('tab-active', 'item-active')})
        item[i].classList.add('tab-active','item-active')
    })
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        change([buttons, items], i)
    })
}