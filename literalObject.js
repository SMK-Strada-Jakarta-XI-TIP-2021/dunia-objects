// Tulis kode di bawah ini

let sepeda = {
    merek: "Fixie",
    warna: "hitam",
    berat: 8.5,
    harga: 1950000,
    kondisiBagus: true,
    
    cekHarga: function () {
       return this.merek + ' ini ' + 'harga ' + this.harga + ' dengan berat ' + this.berat + ' KiloGram'; // cek harga sepeda
    }
};

console.log(sepeda);
console.log(sepeda.warna);
console.log(sepeda.merek);
console.log(sepeda.cekHarga());

let cekHargaSepeda = sepeda.cekHarga();

console.log('ini cek harga sepeda = ' + cekHargaSepeda); // hasil