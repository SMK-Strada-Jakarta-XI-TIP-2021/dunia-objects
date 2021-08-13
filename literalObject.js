// Tulis kode di bawah ini

 class pohon {
    constructor(nama, tinggi, family, kingdom) {
      this.nama = nama;
      this.tinggi = tinggi;
      this.family = family;
      this.kingdom = kingdom;
    }
}

var pohon1 = new pohon("pohon Pinus", "2-4 meter", "Pinaceae", "-")
console.log(pohon1);

var pohon2 = new pohon("pohon Ketapang", "3 meter", "Combretaceae",  "Plantae Divisio")
console.log(pohon2);