const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

const cars = [];

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.id = Date.now();
    }
}

function deleteCar(id) {
    const carIndex = cars.findIndex(car => car.id === id);
    cars.splice(carIndex, 1);

    render(cars);
}

function createCarElement(car) {
    const tr = document.createElement('tr');

    // Id Td
    const idTd = document.createElement('td');
    idTd.textContent = car.id;

    // Make td 
    const makeTd = document.createElement('td');
    makeTd.textContent = car.make;

    // Model td
    const modelTd = document.createElement('td');
    modelTd.textContent = car.model;

    // Year td
    const yearTd = document.createElement('td');
    yearTd.textContent = car.year;

    // Delete button
    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');

    deleteBtn.onclick = function() {
        deleteCar(car.id)
    }

    deleteBtn.textContent = 'Delete'

    deleteTd.appendChild(deleteBtn);

    tr.appendChild(idTd);
    tr.appendChild(makeTd);
    tr.appendChild(modelTd);
    tr.appendChild(yearTd);
    tr.appendChild(deleteBtn);

    return tr;
}

function render(cars) {
    tbody.innerHTML = '';

    for(let i = 0; i < cars.length; i++){
        const carTr = createCarElement(cars[i]);
        tbody.appendChild(carTr)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Getting values from input
    const make = form.make.value;
    const model = form.model.value;
    const year = form.year.value;

    // Creating new car object
    const car = new Car(make, model, year);

    // Adding car object to array
    cars.push(car);

    // render whole car arr
    render(cars);

    // Form reset
    form.reset();

    alert('Car added!');
});