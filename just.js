// var bor = 9+9+99+200;

// if(bor>200){
//     console.log("kebesaran")
// }
// else if(bor>=100){
//     console.log("ok")
// }
// else{
//     console.log("kekecilan")
// }

// for(var i=0; i<=3;i+1){
//     console.log(bor)
// }

//mulai saja
// let p = document.querySelector('p');
// let button = document.querySelector('button');
// let input = document.querySelector('input');

// button.addEventListener('click',function(){
//     let isi = input.value;
//     console.log(isi);
// })
// let clickb =function(){
//     let isi = input.value;
//      p.innerText = isi;
//     //  console.log(isi);
// };

// button.addEventListener('input',clickb);
// button.addEventListener('click',clickb);

let button = document.querySelector('button')
let input = document.querySelector('input');

button.addEventListener('click',function(){
  let isi= input.value;
  console.log(isi)
})
// let nama=['budi','ari','anita'];
// console.log(nama.join());


//batu gunting kertas
// var player="batu";

// const randomNumber = Math.floor(Math.random()*4 );

// var bot="";
// let fini="";

// if(randomNumber == 1){
//     bot="kertas"
//     if(player>="batu"){
//         fini="kalah"
//     }
//     else if(player>="gunting"){
//         fini="ya menang dong"
//     }
//     else if(player>="kertas"){
//         fini="seri"
//     }
// }
// else if(randomNumber == 2){
//     bot = "batu"
//     if(player>="batu"){
//         fini="seri"
//     }
//     else if(player>="gunting"){
//         fini="kalah"
//     }
//     else if(player>="kertas"){
//         fini="menang"
//     }
// }
// else if(randomNumber == 3){
//     bot = "gunting"
//     if(player>="batu"){
//         fini="menang"
//     }
//     else if(player>="gunting"){
//         fini="seri"
//     }
//     else if(player>="kertas"){
//         fini="kalah"
//     }
// }
// else{
//     console.log("error")
// }

// console.log('player:',player)
// console.log('bot:', bot)
// console.log(fini)

// for (let i = 0; i<50; i++){
//     if(i % 2==1){
//       continue; //break(untuk berhenti ),continue(lanjutkan)
//     }
//     else if(i==42){
//         break;
//     }
//     console.log("nomor",i)
//   }

const myNumber = 30;
let binary = "";

// With for loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binary = "0" + binary
  } else {
    binary = "1" + binary;
  }
}
console.log(binary)
