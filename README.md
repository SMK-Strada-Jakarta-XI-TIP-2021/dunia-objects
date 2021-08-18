# dunia-objects
Membuat berbagai Object Literal dalam JavaScript
// Tulis kode di bawah ini
let buah = {
    nama: "nanas",
    warna: "kuning",
    harga: 15000, 
    beratGram: 650,
    buahFresh: "true",
    cekHarga: function () {
        return this.nama + ' ini ' + ' harganya ' + this.harga + ' dengan berat ' + this.beratGram; // cek harga mobil
    }
};


console.log(buah);
console.log(buah.warna);
console.log(buah.nama);
console.log(buah.cekHarga());

let cekHargabuah = buah.cekHarga();

console.log('ini cek harga buah = ' + cekHargabuah);