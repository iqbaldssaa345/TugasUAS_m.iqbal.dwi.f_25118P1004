const form = document.getElementById("formDaftar");
const pesan = document.getElementById("pesan");
const listPeserta = document.getElementById("listPeserta");
const jumlahPesertaText = document.getElementById("jumlahPeserta");

let jumlahPeserta = 0;
const MAX_KUOTA = 50;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (jumlahPeserta >= MAX_KUOTA) {
        pesan.textContent = "Pendaftaran ditutup, kuota sudah penuh";
        pesan.style.color = "red";
        return;
    }

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const hp = document.getElementById("hp").value.trim();
    const kategori = document.getElementById("kategori").value;

    // VALIDASI
    if (nama === "" || email === "" || hp === "" || kategori === "") {
        pesan.textContent = "Semua input wajib diisi";
        pesan.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        pesan.textContent = "Email harus mengandung karakter @";
        pesan.style.color = "red";
        return;
    }

    if (!/^[0-9]+$/.test(hp)) {
        pesan.textContent = "Nomor HP hanya boleh angka";
        pesan.style.color = "red";
        return;
    }

    // TAMBAH PESERTA KE LIST
    const li = document.createElement("li");
    li.textContent = `${nama} - ${kategori}`;
    listPeserta.appendChild(li);

    jumlahPeserta++;
    jumlahPesertaText.textContent = jumlahPeserta;

    pesan.textContent = "Pendaftaran berhasil!";
    pesan.style.color = "green";

    form.reset();

    if (jumlahPeserta >= MAX_KUOTA) {
        pesan.textContent = "Pendaftaran ditutup, kuota sudah penuh";
        pesan.style.color = "red";
    }
});
