let persons = [];
class Person{
    constructor(name, age, color, job, pet, hobby, country){
        this.name = name;
        this.age = age;
        this.color = color;
        this.job = job;
        this.pet = pet;
        this.hobby = hobby;
        this.country = country;
    }
}

const name = [1,2,3].map(e => {
    return e * 2;
});


const create = (e) => {

    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
    const job = document.getElementById("job").value;
    const pet = document.getElementById("pet").value;
    const hobby = document.getElementById("hobby").value;
    const country = document.getElementById("country").value;
    if(!name || !age || !color || !job || !pet || !hobby || !country){
        alert("Todos los campos son requeridos");
        return;
    }
    let newPerson = new Person(name, age, color, job, pet, hobby, country);
    persons.push(newPerson);

    addElement(newPerson);
    cleanInput();
    console.log(persons);
}

const addElement = person => {
    const table = document.getElementById("table");
    table.innerHTML += `
        <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.color}</td>
        <td>${person.job}</td>
        <td>${person.pet}</td>
        <td>${person.hobby}</td>
        <td>${person.country}</td>
        <td>
            <p onclick="deleteRow(this)" id="delete">Eliminar</p>
        </td>
        </tr>
    `
}

const deleteRow = row => {
    const d = row.parentNode.parentNode.rowIndex;
    persons.splice(d - 2, 1);
    console.log(persons);
    document.getElementById("table").deleteRow(d);
}

const cleanInput = () => {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("color").value = "";
    document.getElementById("job").value = "";
    document.getElementById("pet").value = "";
    document.getElementById("hobby").value = "";
    document.getElementById("country").value = "";
}
















