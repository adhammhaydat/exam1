
let form =document.getElementById('form');
let printData =document.getElementById('printData');
let ol =document.getElementById('ol')

function ToDo(desc,date){
  this.desc=desc;
  this.date=date;
ToDo.all.push(this);
}
ToDo.all=[];



function render(){
  let data= JSON.parse(localStorage.getItem('userTodo'));
  if(data){
    ToDo.all=data;
    for (let i = 0; i < data.length; i++) {
      let li=document.createElement('li');
      
      let span1=document.createElement('span')
      li.appendChild(span1);
      span1.textContent=` ${data[i].desc}`;
      span1.setAttribute('class','text');
      let span2=document.createElement('span')
      li.appendChild(span2);
      span2.textContent=`${data[i].date}`;
      span2.setAttribute('class','text2');
      ol.appendChild(li);
    }

  }
}

render();
function getData(e){
  e.preventDefault();

  let todo=e.target.userTodo.value;
  let date=e.target.date.value;

  new ToDo(todo,date);
  
  localStorage.setItem('userTodo', JSON.stringify(ToDo.all));

  
  let li=document.createElement('li');
  ol.appendChild(li);
  let span1=document.createElement('span')
  li.appendChild(span1);
  span1.textContent=` ${todo}`;
  span1.setAttribute('class','text');
  let span2=document.createElement('span')
  li.appendChild(span2);
  span2.textContent=`${date}`;
  span2.setAttribute('class','text2');
}
form.addEventListener('submit',getData);
