const link = document.querySelectorAll('.navbar-content a')
link.forEach(item => {
    item.addEventListener('click', function () {
        let linkActive = document.querySelector('.navbar-content a.active')
        if (linkActive) {
            linkActive.classList.remove('active')
        }
        item.classList.add('active')
    })
})


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    console.log('ssss');
    const nav = document.querySelector('.navbar-content');
    nav.classList.toggle('open');
});
