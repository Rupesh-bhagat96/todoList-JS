const inputTask=document.querySelector('input');
const ul=document.querySelector('ul');
const msg=document.getElementById('msg');
const p=document.querySelector('p');
let t=0;


function addFn(){
  if(inputTask.value){
    let liAdded=document.createElement("li")
    liAdded.innerHTML=`${inputTask.value}`
     let span = document.createElement("span")
    span.innerHTML='&#10006'
    liAdded.appendChild(span)
    ul.appendChild(liAdded)
   
    inputTask.value=""   
    msg.innerText=""
    t++
    p.innerHTML=`You have ${t} task left`
  }
  else{
    msg.innerText="First enter task"  
  }
  saveData()
}

ul.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check")
        console.log(e.target.classList);
        
        if(e.target.classList.value==""){
          t++
        }
        else if(e.target.classList.value=="check"){
          t--
        }
    }
    else if(e.target.tagName==="SPAN"){
       
      if(!(e.target.parentElement.classList.value)){
        t--
      }
   
        e.target.parentElement.remove() 
    }

    if(t<=0){
      p.innerHTML=`You Completed todays task <br> No task left`   
      t=0;
    }
    else{
      p.innerHTML=`You have ${t} task left`  
    }
    
    saveData()
})

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
    localStorage.setItem("task",p.innerHTML);
}

function getData(){
    ul.innerHTML=localStorage.getItem("data")
    p.innerHTML=localStorage.getItem("task")
}
getData();











