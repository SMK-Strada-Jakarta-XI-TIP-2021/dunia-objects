// Tulis kode di bawah ini
let buku = {
    merk: "tulis",
    size: "mode",
    warna: "kertas-putih",
    kondisi: "sangat bagus",
    harga: 7430972473,

    buku: function () {
        return this.merk + ' kertas ' + ' bersih ' + 'indah';
    }
}
console.log(buku);
console.log(buku.merk);
console.log(buku.size);
console.log(buku.buku());
console.log('ini buku tulis ' + buku.buku);
let buku = buku.buku();