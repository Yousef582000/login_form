var signin =document.querySelector('.signin');
var signup =document.querySelector('.signup');
var container =document.querySelector('.container');
signup.addEventListener('click',() =>{
    container.classList.toggle('active');
});
signin.addEventListener('click',() =>{
    container.classList.toggle('active');
});

