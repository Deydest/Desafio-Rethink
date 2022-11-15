$('#form-contact').submit(function(){
    var name = $('#nome');
    var age = $('#idade');
    

});

const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
];

var filterName = function(name){
    for (let i = 0; i< pessoas.length; i++) {
      if(pessoas[i].name == name){
        console.log(pessoas[i])
      }
    }
}

filterName("Gabriel Gomes");

var listName = function(){

    let arraYFirstName = []
    let arraYFullName = []
    
    for (let i = 0; i < pessoas.length; i++) {
        let first_name = pessoas[i].name.split(" ");
        arraYFirstName.push(first_name[0])
        arraYFullName.push(pessoas[i].name)
    }
    console.log(arraYFirstName)
    console.log(arraYFullName)
}

listName();

var insertId = function(){   
    
    let arrayWithId = []

    for(i = 0; i < pessoas.length; i++){
        let obj = {
            'id': i + 1,
            'name': pessoas[i].name,
            'age': pessoas[i].age
        }

        arrayWithId.push(obj)
    }
    console.log(arrayWithId)
}
insertId();

var driverLicense = function(){
    let arrayAbletoDrive = []
    for (let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].age >= 18){
            arrayAbletoDrive.push(pessoas[i]);
        }
    }
    console.log(arrayAbletoDrive)
}
driverLicense();

var averageAge = function(){
    let sumAges = 0;

    for (let i = 0; i < pessoas.length; i++) {
        sumAges += pessoas[i].age;
    }

    console.log("Média das idades: " + parseFloat((sumAges/pessoas.length).toString()).toFixed(2))
}

averageAge();