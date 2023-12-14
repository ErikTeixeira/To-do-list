let btAddCardToDo = document.querySelector(".btAddCardToDo");
let areaTasksToDo = document.querySelector(".areaTasksToDo");

let btAddCardInProg = document.querySelector(".btAddCardInProg");
let areaTasksInProg = document.querySelector(".areaTasksInProg");

let btAddCardDone = document.querySelector(".btAddCardDone");
let areaTasksDone = document.querySelector(".areaTasksDone");


let btAddCard = document.querySelectorAll(".btAddCard");




function createTaskContainer(inputValue, areaDasTasks) {
    if (inputValue.trim() !== '') {
        let taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');

        let task = document.createElement('input');
        task.setAttribute('type', 'text');
        task.setAttribute('class', 'inputTask');
        task.setAttribute('value', inputValue);

        taskContainer.appendChild(task);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btDelete');

        let deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', './imgs/icon-x.png');
        deleteIcon.setAttribute('alt', 'Delete icon');

        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener('click', function () {
            taskContainer.remove();
        });

        taskContainer.appendChild(deleteButton);

        areaDasTasks.appendChild(taskContainer);
    } else {
        alert('Por favor, insira uma tarefa válida!');
    }
}



function addTaskOnClick(button, inputField, areaDasTasks) {
    button.addEventListener("click", function() {
        let valorInput = inputField.value;
        createTaskContainer(valorInput, areaDasTasks);
        inputField.value = '';
    });
}


btAddCard.forEach(function (botao) {
    botao.addEventListener("click", function () {
        let parentDiv = this.parentNode;
        let inputTask = document.createElement('input');
        inputTask.setAttribute('type', 'text');
        inputTask.setAttribute('class', 'inputTask');
        inputTask.setAttribute('placeholder', 'Adicione uma tarefa');
        parentDiv.querySelector('.areaTasks').appendChild(inputTask);
    });
});



addTaskOnClick(btAddCardToDo, document.querySelector("#taskInseridaToDo"), areaTasksToDo);
addTaskOnClick(btAddCardInProg, document.querySelector("#taskInseridaInProg"), areaTasksInProg);
addTaskOnClick(btAddCardDone, document.querySelector("#taskInseridaDone"), areaTasksDone);