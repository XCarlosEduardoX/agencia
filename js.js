const cars = [
    {
        id: 0,
        mark: 'Mustang',
        model: 'Perseverance',
        color: 'blue',
        year: 2020,
        price: 2000000


    }

];
const edit = false;
function printCars(array) {
    const container = document.getElementById('contenido');
    container.innerHTML = '';
    array.forEach((item) => {
        const htmlCar = `<tr>
                            <td>${item.mark}</td>
                            <td>${item.model}</td>
                            <td>${item.color}</td>
                            <td>${item.year}</td>
                            <td>${item.price}</td>




    <td>
    <button class="btn btn-danger" onclick="deleteCar(${item.id})">Eliminar</button>
    <button class="btn btn-warning" onclick="editCar(${item.id})">Actualizar</button>
    </td>
</tr>`;
        container.innerHTML += htmlCar;
    });
}
const EDIT = 'Editar';
const CREATE = 'Agregar';


function addCars() {
    const inputMark = document.getElementById('mark').value;
    const inputModel = document.getElementById('model').value;
    const inputColor = document.getElementById('color').value;
    const inputYear = document.getElementById('year').value;
    const inputPrice= document.getElementById('price').value;


    const newCar = {
        id: generateId(),
        mark: inputMark,
        model: inputModel,
        color: inputColor,
        year: inputYear,
        price: inputPrice
    }

    cars.push(newCar);
    printCars(cars);


}

function generateId() {
    let n = 0;
    cars.forEach((item) => {
        if (item.id > n) {
            n = item.id;
        }
    });
    return n += 1;
}

function deleteCar(id) {
    const index = cars.findIndex((item) => item.id === id);
    cars.splice(index, 1);
    printCars(cars);
}

function editCar(id) {
    const index = cars.findIndex((item) => item.id === id);
    const car = cars[index];

    document.getElementById('mark').value = car.mark;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;

    changeEditbutton(id);





}







function changeEditbutton(id) {
    const button = document.getElementById('btn-form');
    button.innerHTML = 'Editar'
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = id;
}

function changeCreatebutton() {
    const button = document.getElementById('btn-form');;
    button.innerHTML = 'Guardar'
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
}




function agendCar() {
    const btn = document.getElementById('btn-form');
    if (btn.textContent === EDIT) {

        updateCar(btn.value)

    } else {
        addCars();
    }
}

function updateCar(id) {
    cars[id].mark = document.getElementById('mark').value;
    cars[id].model = document.getElementById('model').value;
    cars[id].color = document.getElementById('color').value;
    cars[id].year = document.getElementById('year').value;
    cars[id].price = document.getElementById('price').value;

    printCars(cars);

}

printCars(cars);
