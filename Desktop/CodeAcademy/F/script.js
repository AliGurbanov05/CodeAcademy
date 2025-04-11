// function boyuk(arr) {
//     return arr.charAt(0).toUpperCase() + ad.slice(1).toLowerCase();
// }
// console.log(boyuk("salam"));

function yoxlaParol(parol) {
    if (!/[A-Z]/.test(parol)) {
        return "Parolda ən az bir böyük hərf olmalıdır.";
    }
    if (!/[0-9]/.test(parol)) {
        return "Parolda ən az bir rəqəm olmalıdır.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(parol)) {
        return "Parolda ən az bir simvol olmalıdır.";
    }

    return "Parol uyğundur.";
}
console.log(yoxlaParol("Ali@"));
// function CheckPassword(inputtxt) {
//     var passw = /^[A-Za-z]\w{7,14}$/;
//     if (inputtxt.value.match(passw)) {
//         alert('Success!')
//         return true;
//     }
//     else {
//         alert('Wrong...!')
//         return false;
//     }
// }
