// Tulis kode di bawah ini

let buah = {
    nama        : 'durian',
    beratGram   : 1000,
    harga       : 100000,
    kondisi     : true,
    suplay      : 100,
    demand      : 200,
    manis       : true,

    cekBerat : function() {
        if (this.beratGram >= 1000){
            return 'belom mateng';
        }else {
            return 'ini sudah mateng';
        }
    },
    cekKondisi : function () {
        if (this.kondisi === true) {
            return 'kondisinya bagus';
        } else {
            return 'kondisinya kurang bagus';
        }
    },
    cekHarga : function() {
        if(this.beratGram <= 1000 && this.harga >= 100000 && this.kondisi === true && this.manis === true) {
            return 'mahal dengan kualitas terbaik.';
        } else if (this.beratGram >= 1000 && this.harga >= 100000 && this.kondisi === true && this.manis === false ) {
            return 'mahal dengan kualitas standard';
        } else if (this.beratGram <= 1000 && this.harga <= 100000 && this.kondisi === true && this.manis === true){
            return 'murah dengan kondisi terbaik';
        } else if (this.beratGram >= 1000 && this.harga <= 100000 && this.kondisi === true && this.manis === false) {
            return 'murah dengan kondisi standard';
        }
        
        else {
            return 'mahal dengan kualitas dibawah standard.';
        }
    },
    cekPermintaan : function(){
        if (this.suplay >= this.demand){
            return 'mudah ditemukan';
        } else{
            return 'sulit ditemukan ';
        }
    },
    cekRasa : function(){
        if (this.manis === true) {
            return 'ini manis';
        } else {
            return 'gak enak';
        }
    } 
}

console.log(buah.nama);
console.log(`berat = ${buah.beratGram} gram`);
console.log(`dengan harga = Rp ${buah.harga}`);
console.log(`kondisi bagus = ${buah.kondisi}`);
console.log(`ketersediaan = ${buah.suplay}`);
console.log(`permintaan = ${buah.demand}`);
console.log(`rasa manis = ${buah.manis}`);
console.log();
console.log('==== metod ====');
console.log();
console.log(buah.cekBerat());
console.log(buah.cekKondisi());
console.log(buah.cekHarga());
console.log(buah.cekPermintaan());
console.log(buah.cekRasa());