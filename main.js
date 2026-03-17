// alert('heyyo')

console.log('heyho')

// prompt ('masukkan usia anda')

// const usia = 30
// var usia = 30

// let usia = 30
// usia = 35
// console.log ('rangga usia kamu adalah' + usia)
// alert('usia kamu sekarang' + usia)


// let usia = prompt('berapa usia kamu?')
// alert('usia anda =' + usia)

// Tipe data di javascript
 let nama = 'rangga' // Tipe string
 let usia = 20 // tipe interger number
 let tinggiBadan = 170.5 // tipe double / float
 let beratBadan
 let pacar = 2
 
 beratBadan = 75
 
 //pengkondisian
 if (pacar==null) { //bandingin variabel tertentu
    pacar = 'belum punya'
}else{
    pacar = 'udah punya'
}

let saldoAwal = 50000
let saldoBonus = 75000
const berlangganan = 65000
const saldoAkhir = saldoAwal + saldoBonus - berlangganan

// switch
// switch (pacar) {
//     case 1:
//         pacar = "punya 1 = bohong, yang bener kamu"
//         break 
//     case 2:
//         pacar = "punya 2 = ga setia sia anjg"
//         break
//     default:
//         pacar = "belum punya pacar"
//         break
// }


alert('nama anda adalah ' + nama + ' dan usia anda adalah '+ usia) 

alert(
    `nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan}cm. berat badan saya ${beratBadan}kg. pacar saya ${pacar}`
)

alert(`saldo awal saya adalah Rp.${saldoAwal} dan saya dapat bonus sebesar Rp.${saldoBonus} dan saya Berlangganan netflix sebesar Rp.${65000} total saldo saya sebanyak ${saldoAkhir}`)