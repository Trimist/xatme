// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const profilePage = document.getElementById('profilePage');
    
    // After 5 seconds, hide loading screen and show profile
    setTimeout(function() {
        // Fade out loading screen
        loadingScreen.classList.add('hidden');
        
        // After fade out completes, show profile with animation
        setTimeout(function() {
            profilePage.classList.add('active', 'pre-enter');
            
            // Trigger entrance animation
            setTimeout(function() {
                profilePage.classList.add('on-enter');
            }, 100);
            
            // Remove animation classes after completion
            setTimeout(function() {
                profilePage.classList.remove('pre-enter', 'on-enter');
            }, 1000);
        }, 500);
    }, 5000); // 5 seconds delay
});