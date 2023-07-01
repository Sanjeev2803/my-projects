const input=document.getElementById('input');
const addbutton=document.getElementById('button');
const savebutton=document.getElementById('save');
const ul=document.querySelector('ul');
addbutton.addEventListener('click', () => {
  if(input.value!=''){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
  
    const li = document.createElement('li');
    li.appendChild(checkbox);
  
    const label = document.createElement('label');
    label.textContent = input.value;
    li.appendChild(label);
    

  
    ul.appendChild(li);
  
    input.value = ''; 
  }// Clear the input field after adding the item
  });
  const todoList=()=> {
    localStorage.setItem('todoList', save.innerHTML);
  }
  const save =document.getElementById('content');
  savebutton.addEventListener('click',todoList);
 
 