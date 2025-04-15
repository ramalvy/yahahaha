document.getElementById('tampilkanPesan').addEventListener('click', function() {
    const pesanSemangat = [
        "Sayang, Semangat yah Kerjanya❤",
        "Sayang, Jangan Nyerah Okey?😇",
        "Kalau Gak Kuat, Cerita Aja Sama Mas🤗",
        "Sehat-Sehat Yaa Cantik🥰",
        "Love You Most Sweetie❤"
    ];

    const namaPacar = "Sayang";
    const pesanAcak = pesanSemangat[Math.floor(Math.random() * pesanSemangat.length)];
    const pesanPersonal = `${namaPacar}, ${pesanAcak}`;

    const elemenPesan = document.getElementById('pesanSemangat');
    elemenPesan.textContent = pesanPersonal;
    setTimeout(() => {
        elemenPesan.style.opacity = 1;
    }, 10);
});

document.addEventListener('DOMContentLoaded', function() {
    const musik = document.getElementById('musikLatar');
    musik.play().catch(error => console.error("User belum berinteraksi dengan halaman:", error));
});