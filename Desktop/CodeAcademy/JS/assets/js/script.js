// let FirstName = "Ali"
// let LastName = "Qurbanov"
// let age = 20
// console.log("Ad:" + " " + FirstName + " Soyad:" + " " + LastName + " " + "Yas:" + " " + age);

// let a = 5
// let b = 10

// if ((a > b) && (a = 5)) {
//     console.log("Success!")
// } else if ((a > b) || (a < b)) {
//     console.log("Suspect!")
// } else {
//     console.log("Error!")
// }

// let number = [10, 20]

// for (i = 0; i > 5; i++) {
//     console.log(number ** 3)
// }

// let isRich = true
// if (!isRich) {
//     console.log(typeof isRich)
// } else {
//     console.log(typeof typeof isRich)
// }

let ad = prompt("Adinizi daxil edin")
let soyad = prompt("Soy adinizi daxil edin")
let yas = prompt("Yasinizi daxil edin")

if (!ad || !soyad || !yas) {
    alert("Zehmet olmasa melumatlari tam daxil edin.");
} else if (isNaN(Number(yas))) {
    alert("Zehmet olmasa melumatlari duzgun daxil edin.");
}else {
    console.log("Adiniz: " + ad);
    console.log("Soyadiniz: " + soyad);
    console.log("Yasiniz: " + yas);
}