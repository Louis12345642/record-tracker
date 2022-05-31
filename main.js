

const form=document.querySelector('.form-child')


form.addEventListener('submit', addToDom)

function addToDom(event) {
  event.preventDefault()
  //collecting data
  var name=document.querySelector('input[name=name]').value;
  const price=document.querySelector('input[name=price]').value
 ///add to dom
 
  const parentItems=document.querySelector('#items-parent');
 
  //validation
  const errors=[]
  if(!name||!price){
    
    error={
      "ms":"fill in all fields"
    }
    errors.push(error)
    //console.log(error)
    //Display the error througth the errors
    document.querySelector
  }

else if (name.length<5||name.length>10){
  error={
    "ms":"Enter a valid item"
  }
  console.log()
}
  else{
  var  Ul=document.createElement('ul')
  Ul.className="items";
  const ElementUl=`
    <li>${name}</li>
     <li>${price}</li>
      <button onclick="deletItem()" class="delete"></button>`
      Ul.innerHTML=ElementUl;
  parentItems.appendChild(Ul);
  

  }
 //clear form data
 document.querySelector('input[name=name]').value=''
 document.querySelector('input[name=price]').value='';
}
 
///delete function

function deletItem(){
  const item=document.querySelector('.items')
  item.remove()
}
