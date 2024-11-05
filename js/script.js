document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const img = document.querySelector(".profile-img");


function playAudio() {
    if (audio.readyState >= 2) {
        if (audio.paused) {
            audio.play().then(() => {
                console.log("Audio Diputar");
                img.classList.add("active");
            }).catch((error) => {
                console.error("Gagal memutar audio:", error)
            });
        } else {
            audio.pause();
            console.log("Audio dipause");
            img.classList.remove("active");
        }
    } else {
        console.log("Audio belum siap diputar");
    }
}

window.playAudio = playAudio;
});