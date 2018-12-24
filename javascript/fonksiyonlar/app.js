//Fonksiyon Tanımlama

//function merhaba(name = "Bilgi yok",age = "bilgi yok") {
    //if (typeof name === "undefined") name = "Bilgi Yok";
    //if (typeof age === "undefined") age = "Bilgi Yok";
    //console.log(`İsim: ${name} Yaş: ${age}`);
//}
//merhaba("Caner",17); // Fonksiyon Çağrısı 
//merhaba();
//merhaba("Tamer");

//function square(x) {
 //   return x * x;
    //return'ün altına hiçbir kod yazılmaz!!!
//}
//function cube(x) {
//    return x * x * x;
//}
//let a = cube(square(12));
//console.log(a);

/*
function merhaba() {
    return "Merhaba";
}
console.log(merhaba());*/
/*
const merhaba = function(name) {
    console.log("Merhaba" + name);
}
merhaba(" Caner");*/

// Immediately Invoked Function Expression (IIFE)
/*
(function(name){
    console.log("Merhaba: " + name);
})("Caner");*/

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}
console.log(database);
console.log(database.host);
database.add();
database.delete(10);
