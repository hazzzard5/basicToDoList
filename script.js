const listItems = document.getElementById("list");
const addItem = document.querySelector("#add");
const textInput = document.getElementById("text-input")
const clearBtn = document.getElementById("clear")

const todoList = [];




addItem.addEventListener("click", () => {
    const task = textInput.value;
    if (task.trim() !== '') { 
        todoList.push(task);
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <label>${task}</label>
        `;
        listItems.appendChild(listItem);
        textInput.value = '';
    }
});

clearBtn.addEventListener("click", () => {
    listItems.innerHTML = '';
    todoList.length = 0;
    listItems.classList.add('hidden');
})




