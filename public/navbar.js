// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Call the function to update the navigation menu based on the current page
    updateNavMenu();

    // Function to update the navigation menu highlighting based on the current page
    function updateNavMenu() {
        // Extract the last part of the current URL path (assumed to be the page name)
        const currentPath = window.location.pathname.split('/').pop();

        // Select all anchor elements inside elements with the class 'navmenu'
        const navItems = document.querySelectorAll('.navmenu a');

        // Iterate through each navigation item
        navItems.forEach(item => {
            // Get the 'href' attribute of the current navigation item
            const itemHref = item.getAttribute('href');

            // Check if the 'href' attribute matches the current page path
            if (itemHref === currentPath) {
                // Hide the navigation item if it corresponds to the current page
                item.style.display = 'none';
            }   }    );    }
});
