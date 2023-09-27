// Smooth scrolling
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });


    const menuItems = document.querySelectorAll('.nav-menu li');

    // Add a click event listener to each menu item
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            // Remove the "active" class from all menu items
            menuItems.forEach((item) => {
                item.classList.remove('active');
            });

            // Add the "active" class to the clicked menu item
            menuItem.classList.add('active');
        });
    });


    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                element.style.animation = 'fadein 2s ease-in';
            }
        }
    });

    const element = document.querySelector('#bio ');
    observer.observe(element);

});
