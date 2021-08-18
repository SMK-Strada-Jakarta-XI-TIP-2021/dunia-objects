// Tulis kode di bawah ini
console.log("TUGAS DUNIA OBJECT")

let buah = {
    nama: "nanas",
    warna: "kuning",
    harga: 15000, 
    beratGram: 650,
    kondisi: "segar",
    cekHarga: function () {
        return this.nama + ' ini ' + ' harganya ' + this.harga + ' dengan berat ' + this.beratGram; 
    }
};

// Pemanggilan Biasa
console.log("===================")
console.log("Pemanggilan Biasa")
console.log("")
console.log(buah);

// Pemanggilan Chaining
console.log("")
console.log("===================")
console.log("Pemanggilan Chaining")
console.log("")
console.log(buah.nama);
console.log(buah.warna);
console.log(`${buah.harga}`);
console.log(`${buah.beratGram}`);
console.log(buah.kondisi);
console.log(buah.cekHarga());
