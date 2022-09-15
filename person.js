
let people = [];

// Create

const addPersonButton = document.querySelector('.createButton');
const addPerson = document.querySelector('.createPersonForm');
const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastname');
const inputAge = document.querySelector('#age');
const buttonSubmit = document.querySelector('#button_submit');


addPersonButton.addEventListener('click', show_createPerson);
buttonSubmit.addEventListener('click', createPerson);

function person (name,lastname,age){
    let user = {}
    user['name'] = name;
    user['lastname'] = lastname;
    user['age'] = age;
    return user;
};

function createPerson(){
    const name = inputName.value;
    const lastname = inputLastName.value;
    const age = inputAge.value;

    const newPerson = new person(name,lastname,age);


    people.push(newPerson);
    hide_createPerson();
    showPeople();
};

function show_createPerson(){
    addPerson.setAttribute('style', 'display: block');
};

function hide_createPerson(){
    addPerson.setAttribute('style', 'display: none');
    inputName.value = '';
    inputLastName.value = '';
    inputAge.value = 0;
};

// Read

const table = document.getElementById('tablePeople');
const tableBody = document.getElementById('bodyT');


function showPeople(){

    var str = '';
    

    people.forEach(function (person, index) {
        str += `<tr id='linktr_${index}'>

            <td id="tdname_${index}">${person.name}</td>
        
            <td id="tdlastname_${index}">${person.lastname}</td>
        
            <td id="tdage_${index}">${person.age}</td>

            <td><img id="linkimgupdate_${index}" src="./img/update_person.png" class="buttonUpdate" 
            onClick="updatePerson('${person.name}', '${person.lastname}', '${person.age}', '${index}')"></td>

            <td><img id="linkimgdelete_${index}" src="./img/delete_person.png" class="buttonDelete"
            onClick="deletePerson('${index}')"></td>
    
        </tr>`
    });

    $('#bodyT').html(str);

};
showPeople();

// Update   

const divUpdatePerson = document.querySelector('.updatePerson');
const updateName = document.querySelector('#nameUpdate');
const updateLastName = document.querySelector('#lastNameUpdate');
const updateAge = document.querySelector('#ageUpdate');

const bttnUpdateInfo = document.querySelector('#updatePersonButton')

function updatePerson(name, lastname,age, index){
    updateInformation(name, lastname,age, index);
};

function show_updatePerson(name,lastname,age){
    updateName.value = name;
    updateLastName.value = lastname;
    updateAge.value = age;
    divUpdatePerson.setAttribute('style', 'display: block');
};

function hide_updatePerson(){
    divUpdatePerson.setAttribute('style', 'display: none');
    updateName.value = '';
    updateLastName.value = '';
    updateAge.value = 0;
};

function updateInformation(name, lastname, age, index){ 

    show_updatePerson(name,lastname,age);

    bttnUpdateInfo.addEventListener('click', () => {
        const namePerson = updateName.value;
        const lastnamePerson = updateLastName.value;
        const agePerson = updateAge.value;

        people.splice(index, 1,
            {name: namePerson, lastname: lastnamePerson, age: agePerson}
            );
            showPeople();
            hide_updatePerson();
    });

    
};

// Delete

function deletePerson (index){
    people.splice(index, 1);
    showPeople();
};
