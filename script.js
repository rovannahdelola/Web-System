
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navlist').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.navlist').classList.remove('active');
});
