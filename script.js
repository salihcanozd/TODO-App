/* 

*/


const todoTextArea = document.getElementsByTagName("textarea");
const todoButton =document.getElementsByTagName("button");
const todos = document.getElementsByClassName("todos");



/* textarea'dan aldığı singleTodo'yu todos'a ekliyor ve textarea içeriğini temizliyor.   */
function todoTextAreaText(index){
  const todoText = todoTextArea[index].value;
  const temp = document.createElement("div");
  temp.classList.add("singleTodo");
  temp.innerHTML = `
    <span>${todoText}</span>
    <div style="background-color: brown;float: right;">
        <i class="fa-thin fa-trash"></i>
        X
    </div> `;
  todos[index].insertAdjacentElement("afterbegin",temp);
  todoTextArea[index].value = "";      
}



/* Ekle butonuna basıldığında singleTodo'yu html sayfasına ekliyor. */ 
for (let i=0;i<todoTextArea.length;i++){
    todoButton[i].addEventListener("click",()=>{todoTextAreaText(i)})
    todoTextArea[i].addEventListener("keyup", (event)=> {
        if (event.key === "Enter"  && !event.shiftKey) {
          todoTextAreaText(i);
        }
        })

}