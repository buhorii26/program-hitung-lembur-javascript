const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//untuk menampilkan ke layar console
rl.question("Masukkan golongan : ", (golongan) => {
  rl.question("Masukkan jam lembur : ", (lembur) => {
    //deklarasi golongan
    let GolonganA = 5000000;
    let GolonganB = 6500000;
    let GolonganC = 9500000;

    //masukan kondisi ketika user menekan golongan dan jam lembur
    if (golongan == 'A' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganA + eval(30 / 100) * GolonganA); // eval adalah fungsi yang digunakan untuk menghitung persen
    }else if (golongan == 'A' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganA + eval(32 / 100) * GolonganA);
    }else if(golongan == 'A' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganA + eval(34 / 100) * GolonganA);
    }else if(golongan == 'A' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganA + eval(36 / 100) * GolonganA);
    }else if(golongan == 'A' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganA + eval(38 / 100) * GolonganA);
    }else if (golongan == 'B' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganB + eval(30 / 100) * GolonganB);
    }else if (golongan == 'B' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganB + eval(32 / 100) * GolonganB);
    }else if(golongan == 'B' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganB + eval(34 / 100) * GolonganB);
    }else if(golongan == 'B' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganB + eval(36 / 100) * GolonganB);
    }else if(golongan == 'B' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganB + eval(38 / 100) * GolonganB);
    }else if (golongan == 'C' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganC + eval(30 / 100) * GolonganC);
    }else if (golongan == 'C' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganC + eval(32 / 100) * GolonganC);
    }else if(golongan == 'C' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganC + eval(34 / 100) * GolonganC);
    }else if(golongan == 'C' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganC + eval(36 / 100) * GolonganC);
    }else if(golongan == 'C' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganC + eval(38 / 100) * GolonganC);
    }else {
          console.log("golongan tidak ada");
        }
    rl.close();
  });
});
