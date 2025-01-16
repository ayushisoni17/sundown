var box = document.querySelectorAll('.box')
var img = document.querySelector('.img-box')


box.forEach(elem => {
    elem.addEventListener('mouseenter',function(){
        img.style.display = 'initial'
    })
    elem.addEventListener('mouseleave',function(){
        img.style.display = 'none'
    })
});