const title=document.getElementById("title");
const pstatus=document.getElementById("status");
const button=document.getElementById("load-btn");
const input=document.getElementById("todo");
const todoorganize={
    fetchtodo: function(){
    fetch("https://jsonplaceholder.typicode.com/todos/"+input.value)
    .then(response=>{
        if(!response.ok){
            alert("Incorrect!");
            return;
        }
        return response.json();
    })
    .then(data=>{
        title.innerHTML=data.title;
        if(data.completed===true){
            pstatus.innerHTML="Done";
        }else{
            pstatus.innerHTML="Not Done"
        }
        
    })
}
}
button.addEventListener("click",todoorganize.fetchtodo);
input.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        todoorganize.fetchtodo();
    }
})
