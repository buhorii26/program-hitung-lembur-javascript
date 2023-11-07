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

    //rumus perhitungan persen
    // eval adalah fungsi yang digunakan untuk menghitung persen
    const satuJam = eval(30 / 100 );
    const duaJam = eval(32 / 100);
    const tigaJam = eval(34 / 100) ;
    const empatJam = eval(36 / 100);
    const limaJam = eval(38 / 100);

    //masukan kondisi ketika user menekan golongan dan jam lembur
    if (golongan == 'A' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganA + satuJam * GolonganA); 
    }else if (golongan == 'A' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganA + duaJam * GolonganA);
    }else if(golongan == 'A' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganA + tigaJam * GolonganA);
    }else if(golongan == 'A' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganA + empatJam * GolonganA);
    }else if(golongan == 'A' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganA + limaJam * GolonganA);
    }else if (golongan == 'B' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganB + satuJam * GolonganB);
    }else if (golongan == 'B' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganB + duaJam * GolonganB);
    }else if(golongan == 'B' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganB + tigaJam * GolonganB);
    }else if(golongan == 'B' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganB + empatJam * GolonganB);
    }else if(golongan == 'B' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganB + limaJam * GolonganB);
    }else if (golongan == 'C' && lembur == 1) {
        console.log('Jumlah penghasilannya :', GolonganC + satuJam * GolonganC);
    }else if (golongan == 'C' && lembur == 2) {
        console.log('Jumlah penghasilannya :', GolonganC + duaJam * GolonganC);
    }else if(golongan == 'C' && lembur == 3) {
        console.log('Jumlah penghasilannya :', GolonganC + tigaJam * GolonganC);
    }else if(golongan == 'C' && lembur == 4){
        console.log('Jumlah penghasilannya :', GolonganC + empatJam * GolonganC);
    }else if(golongan == 'C' && lembur >= 5) {
        console.log('Jumlah penghasilannya :', GolonganC + limaJam * GolonganC);
    }else {
          console.log("golongan tidak ada");
        }
    rl.close();
  });
});
