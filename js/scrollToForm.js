const goToformButton = document.querySelector('#goToFormButton');


goToformButton.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('.section8').scrollIntoView(true);
});