// Tulis kode di bawah ini

let sepeda = {
    merk: "polygon",
    size: "xl",
    warna: "hitam putih",
    kondisi: "sangat bagus",
    harga: 80000000,

    melajuKencang: function () {
        return this.merk + ' melaju ' + ' kencang ' + 'ngenggg';
    }
};

console.log(sepeda);
console.log(sepeda.merk);
console.log(sepeda.size);
console.log(sepeda.melajuKencang());

let sepedaMelajuKencang = sepeda.melajuKencang();

console.log('ini ketika sepeda ' + sepedaMelajuKencang);

