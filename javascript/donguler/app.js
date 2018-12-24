// While Döngüleri
//let i = 0;
//while(i < 10) {
//    console.log(i);
//    i++; // i değişkeni arttırılmazsa sonsuz döngü tehlikesi
//}

//let i = 10;
//while(i > 0){
//    console.log(i);
//    //i--;
//    i -= 2;
//}

//Break ve Continue

//let i = 0;
//while(i < 10) {
 //   console.log(i);
  //  if (i == 5) {
   //     break;
   // }
   // i++;
//}
/*
let i = 0;
while(i < 10) { // sonsuz döngü
    if (i == 3 || i == 5) {
        i++; //kaldırılırsa sonsuz dögü
        continue;
    }
    console.log(i);
    i++;
}*/

// Do While
/*
let i = 0;
do {
    console.log(i);
    i++;
}while(i < 10);*/

//const langs = ["Java","JavaScript","C#"];
/*
let index = 0;
while(index < langs.length) {
    console.log(langs[index]);
    index++;
}*/
/*
for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}*/
/*
langs.forEach(function(lang,index){
    console.log(lang,index);
});*/
/*
const users = [
    {name: "Caner",age:17},
    {name: "Onur",age:30},
    {name: "Tamer",age:30}
];
const names = users.map(function(user){
    return user.name;
});
const ages = users.map(function(user){
    return user.age;
});
console.log(names);
console.log(ages);*/
/*
const user = {
    name:"Caner",
    age:17
};
for (let key in user) {
    console.log(key,user[key]);
}*/



