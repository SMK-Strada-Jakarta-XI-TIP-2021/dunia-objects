// Tulis kode di bawah ini
// Membuat object literal
let hewan = {
    nama: "Kucing",
    warna: "putih",
    beratGram: 25,
    bagus: true,
    harga: 100000,
    cekHarga: function () {
        return this.nama + ' ini ' + ' harganya ' + this.harga + ' dengan berat ' + this.berat;
    }
};

console.log(hewan);
console.log(hewan.warna);
console.log(hewan.nama);
hewan.cekHarga();

let cekHargaHewan = hewan.cekHarga();

console.log('ini cek harga hewan ===', cekHargaHewan);

