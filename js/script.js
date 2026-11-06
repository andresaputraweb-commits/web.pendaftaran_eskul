const tombolPilih = document.querySelectorAll('.tombol-pilih');
const form = document.getElementById('form-pendaftaran');
const pesanBerhasil = document.getElementById('pesan-berhasil');

// Pilih ekskul di halaman utama
if (tombolPilih.length > 0) {
    tombolPilih.forEach(tombol => {
        tombol.addEventListener('click', function() {
            tombolPilih.forEach(t => t.classList.remove('terpilih'));
            this.classList.add('terpilih');
            const namaEkskul = this.getAttribute('data-nama');
            localStorage.setItem('ekskulTerpilih', namaEkskul);
            alert('Kamu memilih: ' + namaEkskul + ' ✅ Lanjut ke halaman Daftar ya!');
        });
    });
}

// Isi otomatis pilihan ekskul di form
window.addEventListener('load', function() {
    const selectEkskul = document.getElementById('ekskul-pilihan');
    const tersimpan = localStorage.getItem('ekskulTerpilih');
    if (selectEkskul && tersimpan) {
        selectEkskul.value = tersimpan;
    }
});

// Kirim formulir
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama-siswa').value;
        const kelas = document.getElementById('kelas').value;
        const ekskul = document.getElementById('ekskul-pilihan').value;
        const wa = document.getElementById('wa-orangtua').value;
        const alasan = document.getElementById('alasan').value;

        if (!nama || !kelas || !ekskul || !wa) {
            alert('Harap lengkapi semua data yang wajib diisi! 😊');
            return;
        }

        // Tampilkan pesan berhasil
        pesanBerhasil.classList.remove('sembunyi');
        
        // Simpan & tampilkan data (variabel alasan terpakai)
        console.log('✅ Data Terkirim:', { nama, kelas, ekskul, wa, alasan });
        
        // Reset form
        form.reset();
        localStorage.removeItem('ekskulTerpilih');

        // Sembunyikan pesan setelah 6 detik
        setTimeout(function() {
            pesanBerhasil.classList.add('sembunyi');
        }, 6000);
    });
}