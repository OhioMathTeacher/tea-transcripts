(function() {
    const correctPassword = 't3@m@th!';
    const hashedPassword = btoa(correctPassword); // Simple obfuscation
    
    function checkPassword() {
        const entered = prompt('Please enter the password to view this transcript:');
        if (entered === null) {
            document.body.innerHTML = '<div style="text-align:center;padding:50px;font-family:sans-serif;"><h1>Access Denied</h1><p>You must enter a password to view this content.</p></div>';
            return false;
        }
        if (entered !== correctPassword) {
            alert('Incorrect password. Please try again.');
            return checkPassword();
        }
        return true;
    }
    
    if (!checkPassword()) {
        throw new Error('Access denied');
    }
})();
