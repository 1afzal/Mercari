const Array = ["Afzal", "Ali", "Ahmed"];

Array.map((val,idx)=>{
    console.log(idx+1 ,val);
})


const users = [
    { id: 1, name: "Afzal", age: 21 },
    { id: 2, name: "Riya", age: 22 },
    { id: 3, name: "Karan", age: 20 }
  ];

  users.map((val,idx)=>{
    console.log(`id: ${val.id} Name: ${val.name} age: ${val.age}`);
  })