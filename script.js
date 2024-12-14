function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    snow.innerHTML = '❄';
    
    document.body.appendChild(snow);
    
    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSnow, 100);
