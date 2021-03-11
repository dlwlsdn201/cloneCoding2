const sidebar = document.querySelector('#sidebar');
const menubarIcon = document.querySelector('#menuBarIcon');


showSidebar = () => {
    const toggle = sidebar.className;
    (toggle === 'sidebar' ? sidebar.className = 'sidebar-on' : sidebar.className = 'sidebar');
}


menubarIcon.addEventListener('click', showSidebar);


