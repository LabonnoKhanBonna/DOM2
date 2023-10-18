let x = true;
const person = {
    name: "labonno",
    age: 25,
    address:"Dhaka",
    phone:"01689763403"
} 
console.log(person)

// dot notation, bracket notation

//console.log(person.age);
//console.log(person["phone"])
//const y = "address";
// console.log(person[y])

const keys = Object.keys(person)
const value = Object.values(person)
//console.log(keys)
//console.log(value)

for (let key of keys )
{
    console.log(person[key])
}
// same code we usallly write as like
//for (let i = 0 ; i<keys.length; i++)
//{
   // const key = keys[i]
    //console.log(person[key])
//}
for (let i in person )
{
    console.log(person[i])
}

for (let i in person){
    console.log(typeof i,i)
   // console.log(person[i])
}