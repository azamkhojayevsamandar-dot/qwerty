let mashina={
    name: "Toyota",
    type: "Car",
    color: "blue",
    tanirovka: true,
    year: 2020,
    kompaniya: "Toyota Motor Corporation",
    model: "Corolla",
    nomer: "0177 UZB",
    probeg: 0,
    maxSpeed: 180,
    narxi: "25000$",    
    egasi:  {
        ism: "Ali",
        familiya: "Valiyev",
        yosh: 30,
    }
}

console.log("Mashina ma'lumotlari:");
console.log("Nom: " + mashina.name);
console.log("Tur: " + mashina.type);
console.log("Rang: " + mashina.color);
console.log("Tanirovka: " + mashina.tanirovka);
console.log("Yil: " + mashina.year);
console.log("Kompaniya: " + mashina.kompaniya);
console.log("Model: " + mashina.model);
console.log("Nomer: " + mashina.nomer);
console.log("Probeg: " + mashina.probeg);
console.log("Maksimal tezlik: " + mashina.maxSpeed);
console.log("Narxi: " + mashina.narxi);
console.log("Egasi:");
console.log("  Ism: " + mashina.egasi.ism);
console.log("  Familiya: " + mashina.egasi.familiya);
console.log("  Yosh: " + mashina.egasi.yosh);