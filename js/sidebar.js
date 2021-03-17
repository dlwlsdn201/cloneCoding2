//768px 레이아웃 사이드바

const sidebar = document.querySelector('#sidebar');
const menubarIcon = document.querySelector('#menuBarIcon');


showSidebar = () => {
    const toggle = sidebar.className;
    (toggle === 'sidebar-768px-off' ? sidebar.className = 'sidebar-768px-on' : sidebar.className = 'sidebar-768px-off');
}


menubarIcon.addEventListener('click', showSidebar);


