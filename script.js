document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const enterButton = document.getElementById('enterButton');
    
    // No more need for these elements
    // const passwordInput = document.getElementById('passwordInput');
    // const errorMessage = document.getElementById('errorMessage');
    
    enterButton.addEventListener('click', function() {
        enterSite();
    });
    
    function enterSite() {
        splashScreen.classList.add('hide-splash');
        
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 800);
    }
});