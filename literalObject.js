// Tulis kode di bawah ini
// membuat object buah
console.log('ilustrasi toko buah');
console.log('===================');
const buah = {
    nama: "mangga",
    warna: "hijau",
    suplay: 100,
    beratGram: 200,
    kondisi: true,
    harga: 5000,
    cekKondisi: function () {
        if (this.kondisi === true) {
            return "buah ini segar";
        } else {
            return "buah ini sudah busuk";
        }
    },
    cekHarga: function () {
        return `buah ${this.nama} ini seharga ${this.harga}.`;
    },
    totalBarang: function (a) {
        let jmlhBeli = a;
        return jmlhBeli;
    },
    transaksi: function (a) {
        const jumlahBeli = this.totalBarang(a);
        const totalHarga = this.harga * jumlahBeli;
        return `user sedang membeli mangga sebanyak ${jumlahBeli} dengan total ${totalHarga}.`;
    },
    penguranganBarang: function (a) {
        let jmlhBeli = this.totalBarang(a);
        const pengurangan = this.suplay - jmlhBeli;
        return `karena tadi ada user yang sudah membeli buah mangga sebanyak ${jmlhBeli}. maka sisa mangga kita di toko sejumlah ${pengurangan}.`;
    }
}

// pemanggilan biasa
console.log('pemanggilan biasa');
console.log('                   ');
console.log(buah);

// pemanggilan dengan chaining
console.log('pemanggilan dengan chaining');
console.log('                   ');
console.log(`nama : ${buah.nama}`);
console.log(`warna : ${buah.warna}`);
console.log(`berat : ${buah.beratGram}`);
console.log(`kondisi : ${buah.kondisi}`);
console.log(`harga : ${buah.harga}`);
console.log(`cek kondisi : ${buah.cekKondisi()}`);
console.log(`cek harga : ${buah.cekHarga()}`);
console.log(buah.transaksi(20));
console.log(buah.penguranganBarang(20));
// console.log(buah.penambahanBarang(10));
