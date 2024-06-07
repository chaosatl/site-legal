document.getElementById('yesButton').addEventListener('click', () => {
    createBalloons();
    displayResponse('Tamo namorando 💖');
});

function createBalloons() {
    const container = document.getElementById('balloons-container');
    removeBalloons(); // Remove previous balloons
    for (let i = 0; i < 50; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(balloon);
    }
}

function removeBalloons() {
    const container = document.getElementById('balloons-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ffa07a', '#ffd700', '#32cd32', '#1e90ff', '#9370db', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayResponse(message) {
    const responseElement = document.getElementById('response');
    responseElement.textContent = message;
    responseElement.classList.remove('hidden');
}
