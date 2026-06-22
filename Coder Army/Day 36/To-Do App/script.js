let todo_list = [];
    displayItem();

function addTodo(){
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todo_list.push({item: todoItem, due_date: tododate});
    let store = JSON.stringify(todo_list); //here first all data converted into string after that store upon browser local storage.
    localStorage.setItem('task', store)
    inputElement.value = '';
    dateElement.value = '';
    displayItem();
}
function displayItem(data){
    let containerElement = document.querySelector(".todo-container");
    let storedData = JSON.parse(localStorage.getItem("task")) || []; //here stored data first getting from localstorage after that change into array through json.parse 
    let newHtml = '';
    containerElement.innerHTML = data;
    for(let i = 0; i< storedData.length; i++){
            let {item, due_date} = storedData[i]
            newHtml += `<span>${item}</span>
            <span> ${due_date}</span>
            <button class= "btnDelete" onclick = "deleteTask(${i}); displayItem();">Delete</button>
            `;
        
    }
    containerElement.innerHTML = newHtml;
}
function deleteTask(index){
    let storedData = JSON.parse(localStorage.getItem("task")) || [];
    storedData.splice(index, 1);
    
    localStorage.setItem('task', JSON.stringify(storedData));

}