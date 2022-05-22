


console.log("AUTOMOBILE INHERITANCE MODEL  Using  Object.create()")


const Tata_Nexon ={
    wheel : "4",
    Fuel_type : "Diesel",
    Transmission : "Manual & Automatic (AMT)",
    Seating_Capacity : "5 Seater",
    No_of_cylinder : "4"
    
}



const Tata_Altroz = Object.create(Tata_Nexon)
Tata_Altroz.Air_bag = "true";

console.log("Tata_Altroz :",Tata_Altroz)

const Tata_Tiago = Object.create(Tata_Altroz)

console.log("Tata_Tiago :", Tata_Tiago)

const Tata_Harrier = Object.create(Tata_Tiago)

console.log("Tata_Harrier :", Tata_Harrier);





console.log("AUTOMOBILE INHERITANCE MODEL  Using Object.creat and  Constructor function") 



    function  Tata_Punch(){
    this.wheel = "4"
    this.Fuel_type = "Diesel"
    this.Transmission = "Manual & Automatic (AMT)"
    this.Seating_Capacity = "5 Seater"
    this.No_of_cylinder ="4"
    this.Air_bag = true
    
}


let Tata_Tiago_NRG = new Tata_Punch()

console.log("Tata_Tiago_NRG :",Tata_Tiago_NRG)

let Tata_Tigor_EV = new Tata_Punch();
Tata_Tigor_EV.Air_bag = false;
Tata_Tigor_EV.Fuel_type = "Electric";

console.log("Tata Tigor EV :",Tata_Tigor_EV)

let Tata_Nexon_EV = Object.create(Tata_Tigor_EV)

console.log("Tata_Nexon_EV :",Tata_Nexon_EV )

let Tata_Nexon_EV_Max = Object.create(Tata_Nexon_EV);

console.log("Tata_Nexon_EV_Max :",Tata_Nexon_EV_Max)



// let r = "AUTOMOBILE INHERITANCE MODEL" ;
// let l = r.toLowerCase()

// console.log(l)

