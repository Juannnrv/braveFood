document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar_content');
    const sidebarToggle = document.querySelector('.square img');
    const navLinks = document.querySelectorAll('.nav a, .sidebar_content a');

    console.log('Sidebar:', sidebar);
    console.log('Sidebar Toggle:', sidebarToggle);
    console.log('Nav Links:', navLinks);

    sidebarToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el clic se propague y cierre el sidebar
        console.log('Sidebar Toggle Clicked');
        sidebar.style.left = sidebar.style.left === '0px' ? '-100%' : '17px';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            console.log('Navigating to:', targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            sidebar.style.left = '-100%';
        });
    });
});
