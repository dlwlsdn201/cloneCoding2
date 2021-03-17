const submenuItem4 = document.querySelector('#submenuItem4');
const submenuItem5 = document.querySelector('#submenuItem5');
const menuItem4 = document.querySelector('#item4');
const menuItem5 = document.querySelector('#item5');
const icon = document.querySelector('#plusIcon');

menuItem4.addEventListener("click", function(event){
    const targetICON = event.target.children.plusIcon;
    if(submenuItem4.classList[1] === 'submenu-off'){
        submenuItem4.classList.replace("submenu-off","submenu-on");

        targetICON.className = "fas fa-minus"; 
    }else{
        //off
        submenuItem4.classList.replace("submenu-on","submenu-off");
        targetICON.className = "fas fa-plus"; 
    }
})


menuItem5.addEventListener("click", function(event){
    const targetICON = event.target.children.plusIcon;
    if(submenuItem5.classList[1] === 'submenu-off'){
        submenuItem5.classList.replace("submenu-off","submenu-on");

        targetICON.className = "fas fa-minus"; 
    }else{
        //off
        submenuItem5.classList.replace("submenu-on","submenu-off");
        targetICON.className = "fas fa-plus"; 

    }
})