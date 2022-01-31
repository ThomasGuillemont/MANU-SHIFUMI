// PLAYER
let player = () => {
    let input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        if (document.getElementById('Maurice').checked) {
            return `Maurice`;
        } else if (document.getElementById('Nadine').checked) {
            return `Nadine`;
        } else if (document.getElementById('Monstre').checked) {
            return `Monstre`;
        }
    }
}

// SCORE PLAYER
let tokenMe = () => {
    playerScore++;
    localStorage.setItem('playerScore', playerScore);
    tokenPlayer.textContent = playerScore;
}

// SCORE BOT
let tokenIA = () => {
    iaScore++;
    localStorage.setItem('iaScore', iaScore);
    tokenIa.textContent = iaScore;
}

// variables
let token = 0;
let tokenComputer = 0;

// localStorage score player
let playerScore = 0;
if (localStorage.getItem('playerScore')) {
    playerScore = localStorage.getItem('playerScore');
} else {
    localStorage.setItem('playerScore', playerScore);
}

// localStorage score IA
let iaScore = 0;
if (localStorage.getItem('iaScore')) {
    iaScore = localStorage.getItem('iaScore');
} else {
    localStorage.setItem('iaScore', iaScore);
}

// localStorage firstnameUser 
let firstnameUser = 'Aventurier';
if (localStorage.getItem('firstnameUser')) {
    firstnameUser = localStorage.getItem('firstnameUser');
} else {
    localStorage.setItem('firstnameUser', firstnameUser);
}
firstname.textContent = localStorage.getItem('firstnameUser');

// Button clic
playBtn.addEventListener('click', () => {
    let resultPlayer = player()
    // randomItem
    let randomArray = [
        "Maurice",
        "Nadine",
        "Monstre"
    ];
    let randomItem = randomArray[Math.floor(Math.random() * randomArray.length)];
    // Logique du jeu
    if (resultPlayer === randomItem) {
        resultPlay.innerHTML = `IA = ${randomItem}<br>Egalité !`;
    } else {
        if ((resultPlayer === "Maurice" && randomItem === "Monstre") || (resultPlayer === "Nadine" && randomItem === "Maurice") || (resultPlayer === "Monstre" && randomItem === "Nadine")) {
            resultPlay.innerHTML = `IA = ${randomItem}<br>Tu as eu de la chance, cette fois !`;
            tokenMe();
        } else {
            resultPlay.innerHTML = `IA = ${randomItem}<br>Tu fais pas le poids, aventurier !`;
            tokenIA();
        }
    }
})

// Button reset
resetScore.addEventListener('click', () => {
    // supprimer localStorage firstname
    localStorage.removeItem('firstnameUser')
    // supprimer localStorage score
    localStorage.removeItem('playerScore')
    // supprimer localStorage score
    localStorage.removeItem('iaScore')
    // Redirection index.html
    window.location="index.html";
})

// Button music
const btn    = document.querySelector('#btn');
const audio  = document.querySelector('audio');
btnAudio.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

console.log('\n────────────────────▒████▒\n─────────────────░█████▓███░\n───────────────░███▒░░░░░░██\n──────────────▒██▒░░░▒▓▓▓▒░██\n─────────────▓██░░░▒▓█▒▒▒▓▒▓█\n────────────▓█▓─░▒▒▓█─────▓▓█░\n───────────▓█▒░▒▒▒▒█──▓▓▒▒─▓█▒\n──────────▒█▒░▒▒▒▒▓▒─▒▓▒▓▓─▒█░\n──────────█▓░▒▒▒▒▒▓░─▓▒──░░▒█░\n─────────██░▒▒▒▒▒▒█──▓──░▓████████\n────────░█▒▒▒▒▒▒▒▒▓░─█▓███▓▓▓▓██─█▓\n──────▒▓█▓▒▒▒▒▒▒▒▒▓███▓▓████▓▓██──█\n────░███▓▒▒▒▒▓▒▒▒████▒▒░░──████░──██░\n────██▒▒▒▒▒▒▒▒▒▓██▒────────▒██▓────▓█\n───▓█▒▒▒▒▒▒▒▒▓█▓─────▓───▒░░▓──▓────▓█\n───██▒▓▒▒▒▒▒█▓──────▒█▓──▓█░▒──▒░────█\n───██▒▒▓▓▓▒█▓▓───░──▓██──▓█▓▓▓█▓─────█\n───▓█▒██▓▓█▒▒▓█─────░█▓──▒░───░█▓────█\n───░██▓───▓▓▒▒▓▓─────░─────────▒▒─░─░█\n────▓█──▒░─█▒▓█▓──▒───────░─░───█▒──█▒\n─────█──░█░░█▓▒──▓██▒░─░─░─░─░░░█▒███\n─────█▒──▒▒──────▓██████▓─░░░░─▒██▓░\n─────▓█──────────░██▓▓▓██▒─░──░█▒\n──────██▒─────░───░██▓▓▓██▓▒▒▓█▒\n───────░████▒──░───▒█▓▓▓▓▓████▓\n──────▒▓██▓██▒──░───▓█████▓███\n────▒██▓░░░░▓█▓░────░█▒█▒─▒▓█▓\n───▓█▒░░▒▒▒▒▒▓███▓░──▓█▒─▒▓▓█\n──░█▒░▒████▓██▓▓▓██▒───░▓█▓█░\n──▓█▒▒█░─▒───▓█▓▓▓▓▓▓▒▒▓█▓█▓\n──▓█▒█░───────██▓▓▓▓▓█▓▓█▓██\n──▒█▓▓────────░██▓██▓▓▓▓▓▓▓▓█\n───██░────▓▓────█░─█▓▓▓▓▓▓▓─▒█████\n───██░───░──────▓░─▓▓▓▓▓▓▓█─▒█▒░▒██\n──▓█░▓░──▓▓────▒█░─█▓▓▓▓▓▓▓█▒─░░░▒██\n──█─▒██─░──────████▓▓▓▓▓▓▓█▓─░▒▒█▓▓█░\n─▓█─▓▒▓▒░░────▓█▓▓▓▓▓▓▓▓▓▓█░░▒▓█░──▒█\n─▒█░█▒▒█▒───░▓█▓▓▓▓▓▓▓▓▓▓█▓░▒▓▓──▓█▓█\n─█▓▒▓▒▒▓██████▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓─░█▓▒▒█░\n─█░▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓─▒█▒▒▒▒█\n▒█─█▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓─▒█▒▒▒▒██\n▓█─█▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▓▒░█▒▒▒░▓█\n▓█─█▒▓▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒▓░▓░░░░▒█░\n▒█─▓▓▓▓▒▓█▓▓▓▓▓▓▓▓█████▓▓▓▓▒▓░░─▒█▒\n─█▒▓▓▓▓▓▒▓██████████░░██▓█─▒█▓▒▓█░\n─▓█▒█▓▓▓▓▒▓██░─░▒░─────██▒░▓▓▓▒██\n──████▓▓▓██░───────────▓█░▓▒░░▓█░\n────░█████░─────────────██▓─▒██░\n─────────────────────────▓███▒');