

// Add border on Mobile
window.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('borderDiv');
    
    function addBorderOnSmallScreen() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) { 
            contentDiv.classList.add('border', 'border-gray-300', 'rounded-lg', 'p-6');
        } else {
            contentDiv.classList.remove('border', 'border-gray-300', 'rounded-lg', 'p-6');
        }
    }

    // Call the function initially and add an event listener for window resize
    addBorderOnSmallScreen();
    window.addEventListener('resize', addBorderOnSmallScreen);
});
