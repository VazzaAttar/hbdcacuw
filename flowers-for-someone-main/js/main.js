document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');

    // Cek apakah browser mendukung Autoplay
    const canAutoplay = () => {
        return new Promise((resolve) => {
            const tempAudio = new Audio();
            tempAudio.autoplay = true;
            tempAudio.muted = true;
            tempAudio.src = audio.src;
            tempAudio.addEventListener('play', () => {
                resolve(true);
            });
            tempAudio.addEventListener('error', () => {
                resolve(false);
            });
            tempAudio.play().catch(() => resolve(false));
        });
    };

    // Jika tidak bisa autoplay, tambahkan event listener untuk memutar audio
    canAutoplay().then((canPlay) => {
        if (!canPlay) {
            document.body.addEventListener('touchstart', () => {
                audio.play();
            }, { once: true });
        } else {
            audio.play();
        }
    });

    // Script untuk animasi judul
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('HAPPY BIRTHDAY CACUWW').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 300); // 300ms delay
            }
        }

        appendTitle();

        clearTimeout(c);
    }, 1000);
});