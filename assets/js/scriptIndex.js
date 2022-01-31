// PLAYER
let player = () => {
    let input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        if (document.getElementById('rock').checked) {
            return `Maurice`;
        } else if (document.getElementById('leaf').checked) {
            return `Nadine`;
        } else if (document.getElementById('scissors').checked) {
            return `Monstre`;
        }
    }
}
// FIRSTNAME REPLACE
function firstnameReplace() {
    let firstnameChoice = document.getElementById('firstnameChoice').value;
    localStorage.setItem("firstnameUser", firstnameChoice);
    // Redirection shifumi.html
    window.location="shifumi.html";
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
let btnGoGame = document.getElementById('btnGoGame');


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
// redirection au chargement 
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('firstnameUser') != "Aventurier") {
        // Redirection shifumi.html
        window.location="shifumi.html";
    }
});

console.log('\n────────────────────▒████▒\n─────────────────░█████▓███░\n───────────────░███▒░░░░░░██\n──────────────▒██▒░░░▒▓▓▓▒░██\n─────────────▓██░░░▒▓█▒▒▒▓▒▓█\n────────────▓█▓─░▒▒▓█─────▓▓█░\n───────────▓█▒░▒▒▒▒█──▓▓▒▒─▓█▒\n──────────▒█▒░▒▒▒▒▓▒─▒▓▒▓▓─▒█░\n──────────█▓░▒▒▒▒▒▓░─▓▒──░░▒█░\n─────────██░▒▒▒▒▒▒█──▓──░▓████████\n────────░█▒▒▒▒▒▒▒▒▓░─█▓███▓▓▓▓██─█▓\n──────▒▓█▓▒▒▒▒▒▒▒▒▓███▓▓████▓▓██──█\n────░███▓▒▒▒▒▓▒▒▒████▒▒░░──████░──██░\n────██▒▒▒▒▒▒▒▒▒▓██▒────────▒██▓────▓█\n───▓█▒▒▒▒▒▒▒▒▓█▓─────▓───▒░░▓──▓────▓█\n───██▒▓▒▒▒▒▒█▓──────▒█▓──▓█░▒──▒░────█\n───██▒▒▓▓▓▒█▓▓───░──▓██──▓█▓▓▓█▓─────█\n───▓█▒██▓▓█▒▒▓█─────░█▓──▒░───░█▓────█\n───░██▓───▓▓▒▒▓▓─────░─────────▒▒─░─░█\n────▓█──▒░─█▒▓█▓──▒───────░─░───█▒──█▒\n─────█──░█░░█▓▒──▓██▒░─░─░─░─░░░█▒███\n─────█▒──▒▒──────▓██████▓─░░░░─▒██▓░\n─────▓█──────────░██▓▓▓██▒─░──░█▒\n──────██▒─────░───░██▓▓▓██▓▒▒▓█▒\n───────░████▒──░───▒█▓▓▓▓▓████▓\n──────▒▓██▓██▒──░───▓█████▓███\n────▒██▓░░░░▓█▓░────░█▒█▒─▒▓█▓\n───▓█▒░░▒▒▒▒▒▓███▓░──▓█▒─▒▓▓█\n──░█▒░▒████▓██▓▓▓██▒───░▓█▓█░\n──▓█▒▒█░─▒───▓█▓▓▓▓▓▓▒▒▓█▓█▓\n──▓█▒█░───────██▓▓▓▓▓█▓▓█▓██\n──▒█▓▓────────░██▓██▓▓▓▓▓▓▓▓█\n───██░────▓▓────█░─█▓▓▓▓▓▓▓─▒█████\n───██░───░──────▓░─▓▓▓▓▓▓▓█─▒█▒░▒██\n──▓█░▓░──▓▓────▒█░─█▓▓▓▓▓▓▓█▒─░░░▒██\n──█─▒██─░──────████▓▓▓▓▓▓▓█▓─░▒▒█▓▓█░\n─▓█─▓▒▓▒░░────▓█▓▓▓▓▓▓▓▓▓▓█░░▒▓█░──▒█\n─▒█░█▒▒█▒───░▓█▓▓▓▓▓▓▓▓▓▓█▓░▒▓▓──▓█▓█\n─█▓▒▓▒▒▓██████▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓─░█▓▒▒█░\n─█░▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓─▒█▒▒▒▒█\n▒█─█▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓─▒█▒▒▒▒██\n▓█─█▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▓▒░█▒▒▒░▓█\n▓█─█▒▓▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒▓░▓░░░░▒█░\n▒█─▓▓▓▓▒▓█▓▓▓▓▓▓▓▓█████▓▓▓▓▒▓░░─▒█▒\n─█▒▓▓▓▓▓▒▓██████████░░██▓█─▒█▓▒▓█░\n─▓█▒█▓▓▓▓▒▓██░─░▒░─────██▒░▓▓▓▒██\n──████▓▓▓██░───────────▓█░▓▒░░▓█░\n────░█████░─────────────██▓─▒██░\n─────────────────────────▓███▒');