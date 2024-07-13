const logoPassword = document.querySelector('.eye')

logoPassword.addEventListener('click', function () {
    const line = document.querySelector('.line')
    const inputPassword = document.querySelector('#input-password');
    line.classList.toggle('open')
    if (inputPassword.type == 'password') {
        inputPassword.type = "text"
    } else if(inputPassword.type=='text') {
        inputPassword.type = 'password'
    }
    inputPassword.style.width = '90%'
    inputPassword.style.border = 'none'
});