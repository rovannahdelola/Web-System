document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

// signature code SIGIL you can remove this 
function showAlert() {  
    if (!document.getElementById('myAlert')) {
        const alertContainer = document.createElement('div');
        alertContainer.id = 'myAlert';
        alertContainer.style.position = 'fixed';
        alertContainer.style.top = '50%';
        alertContainer.style.left = '50%';
        alertContainer.style.transform = 'translate(-50%, -50%)';
        alertContainer.style.backgroundColor = '#fff';
        alertContainer.style.border = '1px solid #ccc';
        alertContainer.style.borderRadius = '8px';
        alertContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        alertContainer.style.padding = '20px';
        alertContainer.style.textAlign = 'center';
        alertContainer.style.zIndex = '1000';   
        alertContainer.innerHTML = `
            <p>Debug by <b>Marde</b> E follow sab ko ninyo sa github. <span>or palitan ko ninyo ug coffee para ganahan ko mo code. ❤️😁</span></p>
            <button class="redirect-button" onclick="redirect()">My Github Account</button>
            <button class="close-button" onclick="closeAlert()">Maybe Later 😥</button>
        `;    
        document.body.appendChild(alertContainer);
    }
    document.getElementById('myAlert').style.display = 'block';
}
function closeAlert() {
    document.getElementById('myAlert').style.display = 'none';
}
function redirect() {
    window.location.href = 'https://github.com/TheStrongestAlgorithm'; 
}
window.onload = function() {
    showAlert();
};
// end of signature code
