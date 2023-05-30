/* 

*/


const todoTextArea = document.getElementsByTagName("textarea");
const todoButton =document.getElementsByTagName("button");
const todos = document.getElementsByClassName("todos");
const todoClear = document.getElementById("todoClear");
const singleTodos = document.getElementsByClassName("singleTodo");
const hide = document.getElementById("hide");
/* textarea'dan aldığı singleTodo'yu todos'a ekliyor ve textarea içeriğini temizliyor.   */
function todoTextAreaText(index){
  const todoText = todoTextArea[index].value;
  if(todoText.trim().length < 5){
    window.alert("En az 5 karakter girilmelidir.")

    return 0;
  }
  const temp = document.createElement("div");
  temp.classList.add("singleTodo");
  temp.innerHTML = `
    <div class="singleTodoText">${todoText}</div>
    <div class="singleTodoButtons">
    <i class="fa-solid fa-trash icons" ></i> <br>
    <i class="fa-regular fa-circle icons" ></i>
    </div> `;
     
    /*  <i class="fa-solid fa-check icons"></i> <br>   */
    
    todos[index].insertAdjacentElement("afterbegin",temp);
  todoTextArea[index].value = "";      
}

hide.addEventListener("click",()=>{
  if(todos[0].classList.contains("hidden")){
    todos[0].classList.remove("hidden");}

  else{todos[0].classList.add("hidden")};  
  
  })

// tüm yapılacak listesini siler
todoClear.addEventListener("click",()=>{
  if(!(window.confirm("Bu işlem ile tüm kayıtlı verileriniz silinecektir."))){
    return 0;
  }
  while(!(singleTodos.length == 0)){
    singleTodos[0].remove();
    
  }
})


/* Ekle butonuna basıldığında singleTodo'yu html sayfasına ekliyor. */ 
for (let i=0;i<todoTextArea.length;i++){
    todoButton[i].addEventListener("click",()=>{todoTextAreaText(i)})
    todoTextArea[i].addEventListener("keyup", (event)=> {
        if (event.key === "Enter"  && !event.shiftKey) {
          todoTextAreaText(i);
        }
        })

}