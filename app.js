// Tulis kode di bawah ini
console.log("=========== Tugas Objcet Literal ==========");

let hewan = {
    nama : "Kucing",
    age : 5,
    anggotaTubuh: ['Mata',' Mulut',' Kaki',' Hidung',' Ekor'],
    kondisiKucing: "Baik" || true,
    suara: function () {
        return this.nama + " Ini bersuara " + '" Meoww !!! "';
    }
}
console.log("Ini Adalah ===> " + hewan.nama);
console.log(`${hewan.nama} Ini Berumur ===> ${hewan.age} bulan`);
console.log(`Kucing ini memiliki anggota tubuh ===> ${hewan.anggotaTubuh}`)
console.log(`Kondisi Kucing ini ==> ${hewan.kondisiKucing}`);

let suaraKucing = hewan.suara();

console.log("Suara Kucing Adalah ===> " + suaraKucing);

console.log("============================================");