document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square!');

    let container = document.createElement('div');
    container.classList.add('container');



    button.appendChild(btnText);
    document.body.appendChild(button);

    document.body.appendChild(container);


    let squareNumber = 1;

    button.addEventListener("click", function () {

        div.className = 'Square';
        let addSquare = document.createElement('div');
        addSquare.classList.add("square");
        addSquare.id = "squareNumber";
        addSquare.innerText = squareNumber;



        container.appendChild(div);
        squareNumber++



    })








})