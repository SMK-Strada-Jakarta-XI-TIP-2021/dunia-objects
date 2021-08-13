// Tulis kode di bawah ini

let mobil = {
    nama: "Lamborghini",
    warna: "hitam",
    bobotKg: "800",
    harga: 1000000000, 
    keluaranTerbaru: "true",
    cekHarga: function () {
        return this.nama + ' ini ' + ' harganya ' + this.harga + ' dengan bobot ' + this.bobotKg; // cek harga mobil
    }
};

console.log(mobil);
console.log(mobil.warna);
console.log(mobil.nama);
console.log(mobil.cekHarga());

let cekHargaMobil = mobil.cekHarga();

console.log('ini cek harga mobil = ' + cekHargaMobil); // hasil