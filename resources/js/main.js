const appEl = document.querySelector('#app');

const exitButton = document.createElement('button');
exitButton.innerText = 'Exit (background will turn red)';
exitButton.addEventListener('click', e => {
    appEl.style.backgroundColor = '#F00';
    Neutralino.app.exit();
});

const exitAndKillButton = document.createElement('button');
exitAndKillButton.innerText = 'Exit and kill process (background will turn green)';
exitAndKillButton.addEventListener('click', e => {
    appEl.style.backgroundColor = '#0F0';
    Neutralino.app.exit();
    Neutralino.app.killProcess();
});

appEl.append(exitButton, exitAndKillButton);