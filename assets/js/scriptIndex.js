// FIRSTNAME REPLACE
function firstnameReplace() {
    let firstnameChoice = document.getElementById('firstnameChoice').value;
    localStorage.setItem("firstnameUser", firstnameChoice);
    // Redirection shifumi.html
    window.location="shifumi.html";
}

// variables
let btnGoGame = document.getElementById('btnGoGame');

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