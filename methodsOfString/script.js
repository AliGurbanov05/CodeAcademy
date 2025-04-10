// function edediOrta(arr) {
//     if (arr.length === 0) return 0;
//     let cem = arr.reduce((toplam, reqem) => toplam + reqem, 0);
//     return cem / arr.length;
// }

// let array = [10, 20, 30, 40];
// console.log(edediOrta(array));

let cumles = "Salam necesen ne var ne yox";

// function cumleleriTersCevir(cumleler) {
//     return cumleler.map(cumle => cumle.split("").reverse().join(" "));
// }
// console.log(cumleleriTersCevir(cumles));

function enUzunSozuTap(cumle) {
    let sozler = cumle.split(" ");
    let enUzun = sozler[0];

    for (let i = 1; i < sozler.length; i++) {
        if (sozler[i].length > enUzun.length) {
            enUzun = sozler[i];
        }
    }

    console.log("Ən uzun söz:", enUzun);
}

console.log(enUzunSozuTap(cumles));